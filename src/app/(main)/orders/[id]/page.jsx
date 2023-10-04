"use client";
import Card from "@/components/Card";
import Model from "@/components/Modal";
import "react-phone-input-2/lib/style.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/OrderDetail/Header";
import Product from "@/components/OrderDetail/Product";
import Payment from "@/components/OrderDetail/Payment";
import DetailNotes from "@/components/OrderDetail/DetailNotes";
import CustomerInfo from "@/components/OrderDetail/CustomerInfo";
import Tags from "@/components/OrderDetail/Tags";
import AdditionlDetails from "@/components/OrderDetail/Modals/AdditionalDetails";
import SendInvoice from "@/components/OrderDetail/Modals/SendInvoice";
import AddNote from "@/components/OrderDetail/Modals/AddNote";
import PaymentTerm from "@/components/OrderDetail/Modals/PaymentTerm";
import ContactInformation from "@/components/OrderDetail/Modals/ContactInformation";
import ShippingAddress from "@/components/OrderDetail/Modals/ShippingAddress";
import { useGetOrderByIdQuery } from "@/redux/services/ordersApi";

const modalText = [
  "add note",
  "edit contact information",
  "edit shipping address",
  "manage tags",
  "Send invoice",
  "Edit payment terms",
  "additional details",
];

const OrderDetialPage = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetOrderByIdQuery({
    id: id,
  });

  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState(null);

  const openMode = (text) => {
    setOpen(true);
    setModalState(text);
  };

  return (
    <section className="flex flex-col gap-8 mx-auto">
      {/* Header */}
      <Header />
      <div className="flex gap-4 flex-col md:flex-row justify-between flex-wrap items-start">
        <div className="flex-[2] w-full flex flex-col gap-4 ">
          <Card className="flex flex-col gap-2">
            <Product data={data?.data?.items[0]?.order?.line_items} />
          </Card>
          <Card className="flex flex-col gap-2">
            <Payment openFunction={openMode} />
          </Card>
        </div>
        <div className="flex-1 w-full flex flex-col gap-4 ">
          <Card>
            <DetailNotes openFunction={openMode} />
          </Card>
          <Card className={"flex flex-col gap-4"}>
            <CustomerInfo openFunction={openMode} />
          </Card>
          <Card>
            <Tags openFunction={openMode} />
          </Card>
        </div>
      </div>
      {modalText.includes(modalState) && (
        <Model open={open} setOpen={setOpen}>
          <div className="flex justify-between  gap-4 p-4 bg-gray-200">
            <h5 className="font-semibold text-lg capitalize">{modalState}</h5>
            <XMarkIcon
              className="w-7 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          {modalState === "Send invoice" && <SendInvoice setOpen={setOpen} />}

          {modalState === "Edit payment terms" && (
            <PaymentTerm setOpen={setOpen} />
          )}

          {modalState === "add note" && <AddNote setOpen={setOpen} />}

          {modalState === "additional details" && (
            <AdditionlDetails setOpen={setOpen} />
          )}

          {modalState === "edit contact information" && (
            <ContactInformation setOpen={setOpen} />
          )}

          {modalState === "edit shipping address" && (
            <ShippingAddress setOpen={setOpen} />
          )}
        </Model>
      )}
    </section>
  );
};

export default OrderDetialPage;
