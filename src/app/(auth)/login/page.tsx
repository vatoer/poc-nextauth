import { Suspense } from "react";
import CardBanner from "../_components/card-banner";
import LoginForm from "./_components/login-form";
const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-full w-full md:items-stretch justify-center items-center">
      <div className="flex-shrink-0 bg-gradient-to-r from-gray-300 to-blue-300 p-2 shadow-lg rounded-lg border-2">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
      <div className="">
        <CardBanner />
      </div>
    </div>
  );
};

export default LoginPage;
