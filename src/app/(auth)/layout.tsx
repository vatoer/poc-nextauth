import { Navbar } from "@/components/navigations/navbar";
import { UserButton } from "@/components/user/user-button";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 pt-2 md:pt-24">
      <main className="flex min-h-screen flex-col items-center justify-between  p-2 md:px-10">
        {children}
      </main>

      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
};

export default AuthLayout;
