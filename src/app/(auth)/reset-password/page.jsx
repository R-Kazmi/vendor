"use client";
import Loader from "@/components/Loader";
import { notifyError, notifySuccess } from "@/components/Notification";
import { useResetPasswordMutation } from "@/redux/services/authApi";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const [resetPassword, { isSuccess, isError, isLoading, error }] =
    useResetPasswordMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  let resetPasswordToken = searchParams.get("resetPasswordToken");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    resetPassword({ resetPasswordToken, formData });
  };

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Check your email to reset password.");
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
            Reset Password
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="gap-1 flex flex-col">
              <label
                htmlFor="resetPassword"
                className="block text-gray-500 text-sm font-semibold"
              >
                Reset Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="resetPassword"
                  placeholder="Reset Password"
                  className="input-field"
                  {...register("resetPassword", {
                    required: "Reset password is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
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
              </div>
              {errors["resetPassword"]?.message && (
                <p className="text-blue-600 font-normal text-sm">
                  {errors["resetPassword"]?.message}
                </p>
              )}
            </div>
            <div className="gap-1 flex flex-col">
              <label
                htmlFor="new_password"
                className="block text-gray-500 text-sm font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                id="new_password"
                className="input-field"
                {...register("new_password", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "The passwords do not match",
                })}
              />
              {errors["new_password"]?.message && (
                <p className="text-blue-600 font-normal text-sm">
                  {errors["new_password"]?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 flex gap-2 items-center justify-center"
            >
              {isLoading && <Loader w={"20px"} h={"20px"} />}
              Request password
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

export default ResetPassword;
