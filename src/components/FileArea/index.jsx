import React, { useEffect, useState } from "react";
import { IoIosImages } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";

const FileArea = ({
  name,
  type,
  placeholder,
  errorName,
  setSelectedImages,
  selectedImages,
  requiredImage,
  register,
  label,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadImage = (event) => {
    setIsLoading(true);
    const selectedFile = event.target.files;
    const selectedFileArray = Array.from(selectedFile);
    setSelectedImages((previousImages) =>
      previousImages?.concat(selectedFileArray)
    );
    setIsLoading(false);
  };

  return (
    <>
      <section className="h-full overflow-auto p-8 w-full flex flex-col">
        <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
          <label
            htmlFor="domId"
            className="flex flex-col justify-center items-center cursor-pointer"
          >
            <MdCloudUpload className="text-3xl text-gray-500 hover:text-gray-700" />
            <p className="mb-3 font-semibold text-gray-500 hover:text-gray-700 flex flex-wrap justify-center">
              <span>{placeholder}</span>
            </p>
          </label>
          {requiredImage ? (
            <input
              {...register(`${name}`, {
                required: `${label} is required!`,
              })}
              id="domId"
              type={type}
              multiple
              className="w-0 h-0"
              name={name}
              onChange={uploadImage}
              accept="image/png, image/jpeg, image/webp"
            />
          ) : (
            <input
              {...register(`${label}`)}
              id="domId"
              type={type}
              multiple
              className="w-0 h-0"
              name={name}
              onChange={uploadImage}
              accept="image/png, image/jpeg, image/webp"
            />
          )}
        </div>

        <div className="flex flex-wrap -m-1 mt-5">
          {selectedImages?.length === 0 ? (
            <div className="h-full w-full text-center flex flex-col justify-center items-center">
              <IoIosImages
                className={`mx-auto text-6xl ${
                  errorName ? "text-red-500" : "text-gray-300"
                }`}
              />
              <span
                className={`text-small ${
                  errorName ? "text-red-500" : "text-gray-500"
                }`}
              >
                No files selected
              </span>
            </div>
          ) : (
            <div className="h-full w-full text-center flex flex-col justify-center items-center">
              {selectedImages?.length > 0 &&
                (selectedImages?.length > 10 ? (
                  <p className="text-red-500">
                    You can't upload more than 10 images!
                    <br />
                    <span className="text-black">
                      Please Delete
                      <b className="text-red-500">
                        {selectedImages?.length - 10}
                      </b>
                      of them
                    </span>
                  </p>
                ) : (
                  <button type="button">
                    Uploaded {selectedImages?.length} Images
                  </button>
                ))}
            </div>
          )}
          {isLoading ? (
            <div className="h-full w-full text-center flex flex-col justify-center items-center">
              <Loader />
            </div>
          ) : (
            <></>
          )}
          {selectedImages &&
            selectedImages?.map((image, index) => (
              <div
                key={index}
                className="p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24 relative"
              >
                <img
                  src={
                    typeof image === "string" ? image : URL.createObjectURL(image)
                  }
                  className="w-full h-full object-cover rounded-lg bg-fixed"
                  alt="Product Images"
                />
                <div className="flex flex-col z-20 absolute bottom-0 right-0 py-2 px-3">
                  <button
                    type="button"
                    className=" ml-auto focus:outline-none bg-gray-300 p-1 rounded-md text-gray-800"
                    onClick={() => {
                      setSelectedImages(
                        selectedImages?.filter((e) => e !== image)
                      );
                    }}
                  >
                    <svg
                      className="pointer-events-none fill-current w-4 h-4 ml-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="pointer-events-none"
                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default FileArea;
