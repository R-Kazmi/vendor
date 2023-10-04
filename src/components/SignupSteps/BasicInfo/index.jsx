"use client";
import { useEffect, useState } from "react";
import { useSignUpMutation } from "@/redux/services/authApi";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "@/components/Loader";
import { useDispatch } from "react-redux";
import { setRegisteration } from "@/redux/features/registerationSlice";
import { notifyError } from "@/components/Notification";

const BasicInfo = ({ next }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [signUp, { isSuccess, isLoading, isError, error }] =
    useSignUpMutation();

  const onSubmit = (formData) => {
    signUp({ ...formData, step: "1" });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setRegisteration(getValues()));
      next();
    }

    if (isError) {
      notifyError(error.data.message);
    }
  }, [isSuccess, isError]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 pt-3 md:pt-8"
    >
      <div className="gap-1 flex flex-col">
        <label
          htmlFor="name"
          className="block text-gray-500 text-sm font-semibold"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full name"
          className="input-field"
          {...register("name", { required: "Name is required" })}
        />
        {errors["name"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["name"]?.message}
          </p>
        )}
      </div>
      <div className="gap-1 flex flex-col">
        <label
          htmlFor="phone"
          className="block text-gray-500 text-sm font-semibold"
        >
          Phone Number
        </label>
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone number is required" }}
          defaultValue=""
          render={({ field: { ref, ...field } }) => (
            <PhoneInput
              {...field}
              innerRef={ref}
              inputStyle={{ height: "45px", width: "100%" }}
              inputclassName="input-field"
              country={"pk"}
              countryCodeEditable={false}
            />
          )}
        />
        {errors["phone"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["phone"]?.message}
          </p>
        )}
      </div>

      <div className="gap-1 flex flex-col">
        <label
          htmlFor="email"
          className="block text-gray-500 text-sm font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
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
        <label
          htmlFor="password"
          className="block text-gray-500 text-sm font-semibold"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="input-field"
            {...register("password", {
              required: "Password is required",
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
        {errors["password"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["password"]?.message}
          </p>
        )}
      </div>
      <div className="gap-1 flex flex-col">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-500 text-sm font-semibold"
        >
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          className="input-field"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "The passwords do not match",
          })}
        />
        {errors["confirmPassword"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["confirmPassword"]?.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 flex gap-2 items-center justify-center"
      >
        {isLoading && <Loader w={"20px"} h={"20px"} />}
        Next
      </button>
    </form>
  );
};

export default BasicInfo;
