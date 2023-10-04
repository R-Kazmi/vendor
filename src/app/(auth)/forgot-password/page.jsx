"use client";
import Loader from "@/components/Loader";
import { notifyError } from "@/components/Notification";
import { useForgotPasswordMutation } from "@/redux/services/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const [forgotPassword, { isSuccess, isError, isLoading, error }] =
    useForgotPasswordMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    forgotPassword(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Password reset successfully.");
      router.push(`/signin`);
    }

    if (isError) {
      notifyError(error.data.message);
    }
  }, [isSuccess, isError]);

  return (
    <section className="bg-gray-50 h-screen flex p-8 flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center  w-full lg:w-[70%] md:w-[60%]">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img
            className="w-8 h-8 mr-2"
            src="/assets/images/header-logo.png"
            alt="logo"
          />
          ISMMART
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md  sm:p-8">
          <h2 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Forgot Password
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="block text-gray-500 text-sm font-semibold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your registered email"
                className="input-field"
                {...register("email", { required: "Email is required" })}
              />
              {errors["email"]?.message && (
                <p className="text-blue-600 font-normal text-sm">
                  {errors["email"]?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 flex gap-2 items-center justify-center"
            >
              {isLoading && <Loader w={"20px"} h={"20px"} />}
              Request to reset
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="text-gray-600">
              {`Remember you credientials?`}{" "}
              <Link
                href="/signin"
                className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
