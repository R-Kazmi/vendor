import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

const DetailNotes = (props) => {
  const { openFunction } = props;

  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <div className="flex gap-4 items-center justify-between">
            <h5 className="font-bold text-sm">Notes</h5>
            <PencilIcon
              onClick={() => openFunction("add note")}
              className="w-4 cursor-pointer font-bold"
            />
          </div>
          <p className="mt-4 text-sm text-[#616161]">No notes from customer</p>
        </div>
        <div className="w-full mt-4">
          <div className="flex gap-4 items-center justify-between">
            <h5 className="font-bold text-sm">Additional Details</h5>
            <PencilIcon
              onClick={() => openFunction("additional details")}
              className="w-4 cursor-pointer font-bold"
            />
          </div>
          <div className="text-[#616161]">
            <p className="mt-4 text-sm">colour</p>
            <p className="mt-2 text-sm">red</p>
            <p className="mt-4 text-sm">hxs_courier_name</p>
            <p className="mt-2 text-sm">Leopards Courier</p>
            <p className="mt-4 text-sm">hxs_courier_tracking</p>
            <p className="mt-2 text-sm">ID768210586</p>
            <p className="mt-4 text-sm">hxs_courier_url</p>
            <p className="mt-2 text-sm">
              https://www.leopardscourier.com/leopards-tracking
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailNotes;
