"use client";
import Loader from "@/components/Loader";
import { notifyError } from "@/components/Notification";
import { setRegisteration } from "@/redux/features/registerationSlice";
import { useSignUpMutation } from "@/redux/services/authApi";
import {
  useGetCitiesQuery,
  useGetCountriesQuery,
} from "@/redux/services/regionApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const StoreInfo = ({ prev, next }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { data: step1 } = useSelector((state) => state.registerationReducer);
  const { data: countries } = useGetCountriesQuery();
  const { data: cities } = useGetCitiesQuery(
    {
      id: watch("country"),
    },
    { skip: watch("country") === "" }
  );

  const [signUp, { isSuccess, isLoading, isError, error }] =
    useSignUpMutation();

  const onSubmit = (formData) => {
    const newData = { ...step1, ...formData, step: "2" };
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
          htmlFor="storeName"
          className="block text-gray-500 text-sm font-semibold"
        >
          Store Name / Brand Name
        </label>
        <input
          type="text"
          id="storeName"
          {...register("storeName", { required: "Store name is required" })}
          className="input-field"
          placeholder="Store Name / Brand Name"
        />
        {errors["storeName"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["storeName"]?.message}
          </p>
        )}
      </div>

      <div className="gap-1 flex flex-col">
        <label
          htmlFor="storeImage"
          className="block text-gray-500 text-sm font-semibold"
        >
          Store Profile Image
        </label>
        <input
          id="storeImage"
          {...register("storeImage", { required: "Store image is required" })}
          type="file"
          className="input-field"
          accept="image/png, image/jpeg, image/webp"
        />
        {errors["storeImage"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["storeImage"]?.message}
          </p>
        )}
      </div>

      <div className="gap-1 flex flex-col">
        <label
          htmlFor="address"
          className="block text-gray-500 text-sm font-semibold"
        >
          Address
        </label>
        <input
          id="address"
          placeholder="Address"
          {...register("address", { required: "Address is required" })}
          className="input-field"
        />
        {errors["address"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["address"]?.message}
          </p>
        )}
      </div>

      <div className="gap-1 flex flex-col">
        <label
          htmlFor="country"
          className="block text-gray-500 text-sm font-semibold"
        >
          Country
        </label>
        <select
          id="country"
          {...register("country", { required: "Country is required" })}
          className="input-field"
        >
          <option value="">Select Country</option>
          {countries?.data?.items?.map((item, index) => (
            <option key={item?.name} value={`${item?._id}`}>
              {item?.name}
            </option>
          ))}
        </select>
        {errors["country"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["country"]?.message}
          </p>
        )}
      </div>
      <div className="gap-1 flex flex-col">
        <label
          htmlFor="city"
          className="block text-gray-500 text-sm font-semibold"
        >
          City
        </label>
        <select
          id="city"
          {...register("city", { required: "City is required" })}
          className="input-field"
        >
          <option value="">Select City</option>
          {cities?.data?.items?.map((item, index) => (
            <option key={item?.name} value={`${item?._id}`}>
              {item?.name}
            </option>
          ))}
        </select>
        {errors["city"]?.message && (
          <p className="text-blue-600 font-normal text-sm">
            {errors["city"]?.message}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={prev}
          className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 flex gap-2 items-center justify-center"
        >
          Prev
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 flex gap-2 items-center justify-center"
        >
          {isLoading && <Loader w={"20px"} h={"20px"} />}
          Next
        </button>
      </div>
    </form>
  );
};

export default StoreInfo;
