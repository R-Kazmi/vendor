"use client";
import Loader from "@/components/Loader";
import { notifyError, notifySuccess } from "@/components/Notification";
import { setAuthToken } from "@/redux/features/authSlice";
import { useSignInMutation } from "@/redux/services/authApi";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Signin = () => {
  const [signIn, { isLoading, isSuccess, isError, error, data }] =
    useSignInMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data);
  };

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Signin Successfully");
      dispatch(setAuthToken(data?.data?.token));
      router.push("/");
    }

    if (isError) {
      notifyError(error.data.message);
    }
  }, [isSuccess, isError]);

  return (
    <div className="flex h-screen  w-full flex-wrap text-slate-800">
      <div className="flex flex-col justify-center items-center flex-1 p-8">
        <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
          Welcome back <br />
          to <span className="text-blue-600">your Portal</span>
        </p>
        <p className="mt-6 text-center font-medium md:text-left">
          Sign in to your account below.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full lg:w-[70%] md:w-[60%] flex-col gap-3 pt-6"
        >
          <div className="gap-1 flex flex-col">
            <input
              type="email"
              id="email"
              placeholder="Your registered email"
              className="input-field"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors["email"]?.message && (
              <p className="text-blue-600 font-normal text-sm">
                {errors["email"]?.message}
              </p>
            )}
          </div>
          <div className="gap-1 flex flex-col">
            <div className="relative ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Your password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input-field"
              />
              <button
                type="button"
                className="absolute top-3 right-3 text-gray-400"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
              {errors["password"]?.message && (
                <p className="text-blue-600 font-normal text-sm">
                  {errors["password"]?.message}
                </p>
              )}
            </div>
          </div>
          <Link
            href="/forgot-password"
            className=" text-sm font-medium text-gray-600 md:text-left"
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 flex gap-2 items-center justify-center"
          >
            {isLoading && <Loader w={"20px"} h={"20px"} />}
            Sign in
          </button>
        </form>
        <div className="py-12 text-center">
          <p className="text-gray-600">
            {`Don't have an account?`}{" "}
            <Link
              href={`/signup?type=${0}`}
              className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="relative hidden select-none flex-col p-8 bg-blue-600 text-center md:flex justify-center items-center flex-1">
        <div className="mx-auto py-16 text-white xl:w-[40rem]">
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
    </div>
  );
};

export default Signin;
