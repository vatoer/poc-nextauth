import { Suspense } from "react";
import CardBanner from "../_components/card-banner";
import RegisterForm from "./_components/register-form";
const BuatAkunPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-full w-full md:items-stretch justify-center items-center">
      <div className="flex-shrink-0 bg-gradient-to-r from-gray-300 to-blue-300 p-2 shadow-lg rounded-lg border-2">
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterForm />
        </Suspense>
      </div>
      <div className="">
        <CardBanner />
      </div>
    </div>
  );
};

export default BuatAkunPage;
