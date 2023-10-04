"use client";
import { useState } from "react";
import BasicInfo from "@/components/SignupSteps/BasicInfo";
import StoreInfo from "@/components/SignupSteps/StoreInfo";
import Submission from "@/components/SignupSteps/Submission";
import { useRouter, useSearchParams } from "next/navigation";
import Stepper from "@/components/Stepper";

const SignupStepPage = () => {
  const searchParams = useSearchParams();
  let type = Number(searchParams.get("type"));
  const [stepper, setStepper] = useState([true, false, false]);
  const [completed, setCompleted] = useState([false, false, false]);
  const router = useRouter();

  const nextState = () => {
    if (type < stepper.length - 1) router.push(`/signup?type=${type + 1}`);
    setStepper((prev) =>
      prev.map((step, index) => (index === type + 1 ? true : step))
    );
    setCompleted((prev) =>
      prev.map((complete, index) => (index === type ? true : complete))
    );
  };

  const prevState = () => {
    if (type > 0) router.push(`/signup?type=${type - 1}`);
    setStepper((prev) =>
      prev.map((step, index) => (index === type + 1 ? false : step))
    );
    setCompleted((prev) =>
      prev.map((complete, index) => (index === type ? false : complete))
    );
    scrollToTop();
  };

  return (
    <>
      <div className="my-4">
        <Stepper stepper={stepper} completed={completed} />
      </div>
      {type === 0 ? (
        <BasicInfo next={nextState} />
      ) : type === 1 ? (
        <StoreInfo next={nextState} prev={prevState} />
      ) : (
        <Submission prev={prevState} />
      )}
    </>
  );
};

export default SignupStepPage;
