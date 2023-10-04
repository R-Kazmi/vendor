import Link from "next/link";

const SignupLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-wrap text-slate-800">
      <div className="relative hidden select-none flex-col p-8 bg-blue-600 text-center md:flex justify-center items-center flex-1">
        <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <p className="my-6 text-3xl font-semibold leading-10">
            Your Registration Guide
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            necessitatibus nostrum repellendus ab totam.
          </p>
        </div>
        <img
          className="mx-auto w-11/12 max-w-lg rounded-lg object-cover"
          src="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?w=996&t=st=1694166640~exp=1694167240~hmac=67f7bd049c1a823df020f10d6b9462244940158f15aea38e69945452fbfc1fc1"
          alt="Signup Guide"
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-1 p-8">
        <div className="my-auto mx-auto flex flex-col justify-center  md:justify-start w-full lg:w-[70%] md:w-[60%]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already have account?{" "}
            <Link
              href="/signin"
              className="whitespace-nowrap font-semibold text-blue-700"
            >
              Login here
            </Link>
          </p>

          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or register your self
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
