import Card from "@/components/Card";
import PageHeading from "@/components/PageHeading";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const AddDiscountPage = () => {
  return (
    <div>
      {" "}
      <Link href="/customers" className="flex gap-2 items-center">
        <ArrowLeftIcon className="w-8 h-8" />
        <PageHeading heading={"Create Discount"} />
      </Link>
      <div className="flex gap-8 flex-col">
        <div className="flex gap-4 flex-wrap flex-col ">
          <Card className="flex-1">
            <div className="flex-col flex gap-2 w-full">
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 flex-wrap flex-col">
          <Card className="flex-1">
            {" "}
            <div className="flex-col flex gap-2 w-full">
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 flex-wrap flex-col">
          <Card className="flex-1">
            <div className="flex-col flex gap-2 w-full">
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 flex-wrap flex-col">
          <Card className="flex-1">
            {" "}
            <div className="flex-col flex gap-2 w-full">
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 flex-wrap flex-col">
          <Card className="flex-1">
            <div className="flex-col flex gap-2 w-full">
              <div>
                <label className="block text-gray-500 text-sm font-semibold mb-2">
                  Input field
                </label>
                <input type="text" className="input-field" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddDiscountPage;
