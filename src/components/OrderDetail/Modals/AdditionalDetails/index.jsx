import React from "react";

const AdditionlDetails = (props) => {
  const { setOpen } = props;

  return (
    <>
      <div className="p-4">
        <form className="space-y-2">
          <div className="w-full mb-4">
            <label
              htmlFor="colour"
              className="block text-sm font-medium text-gray-700"
            >
              Colour
            </label>
            <input
              type="text"
              id="colour"
              name="colour"
              required
              className="mt-1 p-1 border rounded-lg w-full"
            />
          </div>
          <div className="w-full mb-4">
            <label
              htmlFor="hxs_courier_name"
              className="block text-sm font-medium text-gray-700"
            >
              hxs_courier_name
            </label>
            <input
              type="text"
              id="hxs_courier_name"
              name="hxs_courier_name"
              required
              className="mt-1 p-1 border rounded-lg w-full"
            />
          </div>
          <div className="w-full mb-4">
            <label
              htmlFor="hxs_courier_tracking"
              className="block text-sm font-medium text-gray-700"
            >
              hxs_courier_tracking
            </label>
            <input
              type="text"
              id="hxs_courier_tracking"
              name="hxs_courier_tracking"
              required
              className="mt-1 p-1 border rounded-lg w-full"
            />
          </div>
          <div className="w-full mb-4">
            <label
              htmlFor="hxs_courier_url"
              className="block text-sm font-medium text-gray-700"
            >
              hxs_courier_url
            </label>
            <input
              type="text"
              id="hxs_courier_url"
              name="hxs_courier_url"
              required
              className="mt-1 p-1 border rounded-lg w-full mb-4"
            />
          </div>
          <div>
            <hr className="border"></hr>
            <div className="flex justify-end gap-6 mt-4">
              <button
                type="button"
                onClick={() => [setOpen(false)]}
                className="rounded-md text-sm shadow-lg px-3 py-1 border"
              >
                Cancel
              </button>
              <button className="bg-gray-500 px-3 py-1 text-white text-sm rounded-md hover:bg-gray-800">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdditionlDetails;
