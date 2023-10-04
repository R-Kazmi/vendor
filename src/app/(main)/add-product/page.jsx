"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import AddVariants from "@/components/AddVariants";
import Card from "@/components/Card";
import Model from "@/components/Modal";
import FileArea from "@/components/FileArea";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "@/redux/services/productsApi";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [addProduct, { isLoading }] = useAddProductMutation();

  const [open, setOpen] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("product_type", data.product_type);
    Object.values(data.productImages).forEach((image) =>
      formData.append("images", image)
    );
    formData.append("price", data.price);
    formData.append("compare_at_price", data.compare_at_price);
    formData.append("weight", data.weight);
    formData.append("inventory_quantity", data.quantity);
    data?.variants?.forEach((variant, index) => {
      formData.append(`options[${index}][name]`, variant.name);
      variant?.values?.forEach((option, valueIndex) => {
        formData.append(`options[${index}][values][${valueIndex}]`, option);
      });
    });
    data?.combinations?.forEach((combination, index) => {
      combination?.forEach((option, optionIndex) => {
        formData.append(`variants[${index}][option${optionIndex + 1}]`, option);
      });
      data?.combinationPrices?.length &&
        formData.append(
          `variants[${index}][price]`,
          data.combinationPrices[combination.join(",")]
            ? data.combinationPrices[combination.join(",")]
            : 0
        );
      data?.combinationStocks?.length &&
        formData.append(
          `variants[${index}][inventory_quantity]`,
          data.combinationStocks[combination.join(",")]
            ? data.combinationStocks[combination.join(",")]
            : 0
        );
      data?.combinationSKU?.length &&
        formData.append(
          `variants[${index}][sku]`,
          data.combinationSKU[combination.join(",")]
            ? data.combinationSKU[combination.join(",")]
            : ""
        );
    });
    addProduct(formData);
  };

  return (
    <div className="flex flex-col">
      <h2 className="mb-6 text-2xl font-semibold flex items-center w-full">
        {" "}
        <span>
          <ArrowLeftIcon className="w-6" />
        </span>{" "}
        Add New Product
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {/* Product title and desc */}
            <Card>
              <div className="overflow-hidden max-h-max w-full">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">
                    Product Title
                  </label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    name="title"
                    value={product.title}
                    className="input-field"
                  />
                </div>
                <div className="max-w-full">
                  <label className="block mb-2 text-sm font-medium">
                    Description
                  </label>
                  <ReactQuill
                    theme="snow"
                    className="h-36 bg-white rounded-lg max-w-full"
                    onChange={(value) => setValue("description", value)}
                  />
                </div>
              </div>
            </Card>

            {/* media */}
            <Card className="mt-5">
              <div className="flex flex-col w-full">
                <label className="block mb-2 text-sm font-medium">Media</label>
                <FileArea
                  label="Product Image"
                  name="productImages"
                  type="file"
                  placeholder="Click here to upload"
                  errorName=""
                  setSelectedImages={setSelectedImages}
                  selectedImages={selectedImages}
                  requiredImage={true}
                  register={register}
                />
              </div>
            </Card>

            {/* Pricing */}
            <Card className="mt-5">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium">
                  Pricing
                </label>
                <div className="mb-4">
                  <label className="block mb-2 text-xs font-medium">
                    Price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="text"
                    name="price"
                    value={product.price}
                    className="w-full p-2 border rounded input-field"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-xs font-medium">
                    Compare-at price
                  </label>
                  <input
                    {...register("compare_at_price", { required: true })}
                    type="text"
                    name="compare_at_price"
                    value={product.compare_at_price}
                    className="w-full p-2 border rounded input-field"
                  />
                </div>
              </div>
            </Card>

            {/* Inventory */}
            <Card className="mt-5">
              <div className="w-full">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">
                    Quantity
                  </label>
                  <input
                    {...register("quantity", { required: true })}
                    type="text"
                    name="quantity"
                    value={product.quantity}
                    className="w-full p-2 border rounded input-field"
                  />
                </div>
              </div>
            </Card>

            {/* Shipping */}
            <Card className="mt-5">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium">
                  Shipping
                </label>
                <div className="mb-4">
                  <label className="block mb-2 text-xs font-medium">
                    Weight (kg)
                  </label>
                  <input
                    {...register("weight", { required: true })}
                    type="text"
                    name="weight"
                    value={product.weight}
                    className="w-full p-2 border rounded input-field"
                  />
                </div>
              </div>
            </Card>

            {/* Variants */}
            <Card className="mt-5 h-max">
              <div className="w-full h-max">
                <label className="block mb-2 text-sm font-medium">
                  Variants
                </label>
                <AddVariants register={register} setValue={setValue} />
              </div>
            </Card>

            <Card className="mt-5 h-max">
              <div className="w-full h-max">
                <label className="block mb-2 text-sm font-medium">
                  Search engine listing
                </label>
                <div className="mb-4">
                  <label className="block mb-2 text-xs font-medium">
                    Page title
                  </label>
                  <input
                    {...register("pageTitle", { required: true })}
                    type="text"
                    name="pageTitle"
                    className="w-full p-2 border rounded input-field"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-xs font-medium">
                    Meta description
                  </label>
                  <textarea
                    {...register("metaDescription", { required: true })}
                    type="text"
                    name="metaDescription"
                    className="w-full p-2 rounded-lg border-gray-300"
                    rows="4"
                    cols="50"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-xs font-medium">
                    URL handle
                  </label>
                  <input
                    {...register("urlHandle", { required: true })}
                    type="text"
                    name="urlHandle"
                    className="w-full p-2 border rounded input-field"
                  />
                </div>
              </div>
            </Card>

            <button
              type="submit"
              className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Card>
            <div className="mb-4 w-full">
              <label className="block mb-2 text-sm font-medium">Status</label>
              <select
                {...register("status", { required: true })}
                name="status"
                className="w-full p-2 border rounded input-field"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </Card>
          <Card className="mt-5">
            <div className="mb-4 w-full">
              <label className="block mb-2 text-sm font-medium">
                Product organization
              </label>
              <div className="mb-4">
                <label className="block mb-2 text-xs">Product category</label>
                <input
                  {...register("product_type", { required: true })}
                  type="text"
                  name="product_type"
                  placeholder="Search"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-xs">Product type</label>
                <input
                  {...register("type", { required: true })}
                  type="text"
                  name="type"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-xs">Vendor</label>
                <input
                  {...register("vendor", { required: true })}
                  type="text"
                  name="vendor"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 text-xs flex justify-between">
                  Tags
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    Manage
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Model open={open} setOpen={setOpen}>
        <div className="flex flex-col rounded-3xl p-5">
          <h2 className="mb-4 text-2xl font-semibold">Manage Tags</h2>
          <input className="input-field" type="text" placeholder="Search" />
          <div className="flex flex-col py-2">
            <h3>Available</h3>
            <div>
              <input
                type="checkbox"
                className="mr-2 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <span className="text-sm">Tag 1</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-2 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <span className="text-sm">Tag 1</span>
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-2 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <span className="text-sm">Tag 1</span>
            </div>
          </div>
        </div>
      </Model>
    </div>
  );
};

export default AddProduct;
