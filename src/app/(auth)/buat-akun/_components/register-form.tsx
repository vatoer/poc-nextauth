"use client";
import { ButtonWithGoogle } from "@/auth/_components/button-with-google";
import { FormError } from "@/auth/_components/form-error";
import InputForm from "@/auth/_components/input-form";
import { RegisterSchema, TRegister } from "@/auth/_schema/register";
import { Button, buttonVariants } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { register as registerUser } from "../_actions/register";

const RegisterForm = () => {
  const callbackUrl = useSearchParams().get("callbackUrl") ?? "/";
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: TRegister) => {
    startTransition(async () => {
      const response = await registerUser(data);
      if (response?.error) {
        setError(response.error);
      }
    });
  };

  return (
    <div className=" w-[300px] p-2 flex justify-center items-center ">
      <div className="flex flex-col items-center gap-2 mb-4 w-full">
        <Image
          src="/logo.png"
          alt="Logo"
          width={56}
          height={56}
          className="mx-auto rounded-full border-8 border-blue-600/80 md:block m-4"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
          noValidate
        >
          <InputForm
            id="name"
            label="Name"
            type="text"
            register={register}
            error={errors.name}
          />
          <InputForm
            id="email"
            label="Email"
            type="text"
            register={register}
            error={errors.email}
            pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
          />
          <InputForm
            id="password"
            label="password"
            type="password"
            register={register}
            error={errors.password}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          />
          <FormError message={error} />

          <Button className=" w-full py-6" disabled={isPending} type="submit">
            Register
            {isPending && (
              <Loader className="ml-2 spin-in" size={24} color="white" />
            )}
          </Button>
          <div className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-gray-500">
              atau
            </p>
          </div>
          <ButtonWithGoogle callbackUrl={callbackUrl} />
          <div>
            <Link
              href="/signin"
              className={buttonVariants({
                variant: "link",
                className: "gap-1 w-full text-blue-500",
              })}
            >
              {`Sudah punya akun? Log in`}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const checkEmailPattern = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const checkComplexity = (password: string): boolean => {
  // Password complexity requirements:
  // At least 8 characters
  // Contains at least one uppercase letter
  // Contains at least one lowercase letter
  // Contains at least one digit
  // Contains at least one special character

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};

export default RegisterForm;
