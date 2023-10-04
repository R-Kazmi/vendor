import Loader from "@/components/Loader";
import { notifyError, notifySuccess } from "@/components/Notification";
import { useSignUpMutation } from "@/redux/services/authApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Submission = ({ prev }) => {
  const { data: step2 } = useSelector((state) => state.registerationReducer);
  const router = useRouter();
  const [signUp, { isSuccess, isLoading, isError, error }] =
    useSignUpMutation();

  const onSubmit = () => {
    const newData = { ...step2, step: "3" };
    const data = new FormData();
    Object.entries(newData)?.forEach(([key, value]) => {
      if (key === "storeImage") {
        data.append(key, value[0]);
        return;
      }
      data.append(key, value);
    });
    signUp(data);
  };

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Signup Successful");
      router.push("/");
    }

    if (isError) {
      notifyError(error.data.message);
    }
  }, [isSuccess, isError]);

  console.log(step2);

  return (
    <div className="border-t-4 border-b-4 border-blue-600 shadow-md mt-8 py-2 rounded-lg ">
      <div className="photo-wrapper">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="/assets/images/discount.svg"
          alt="John Doe"
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
          {step2.name}
        </h3>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p> {step2.storeName}</p>
        </div>
        <table className="text-xs my-3 flex justify-center items-center">
          <tbody className="w-full">
            <tr className="flex justify-between">
              <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
              <td className="px-2 py-2">{step2.address}</td>
            </tr>
            <tr className="flex justify-between">
              <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
              <td className="px-2 py-2">{step2.phone}</td>
            </tr>
            <tr className="flex justify-between">
              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td className="px-2 py-2">{step2.email}</td>
            </tr>
            <tr className="flex justify-between">
              <td className="px-2 py-2 text-gray-500 font-semibold">Country</td>
              <td className="px-2 py-2">{step2.country}</td>
            </tr>
            <tr className="flex justify-between">
              <td className="px-2 py-2 text-gray-500 font-semibold">City</td>
              <td className="px-2 py-2">{step2.city}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={prev}
            type="button"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={isLoading}
            className="mt-6 flex gap-2 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
          >
            {isLoading && <Loader w={"20px"} h={"20px"} />}
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submission;
