"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/authProvider";

import styles from "./auth.module.scss";
import Input from "@/components/common/input/input";
import Button from "@/components/common/button/button";
import { loginReq } from "./services";

const loginSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("لطفا شماره موبایل را وارد کنید")
    .matches(/^09/, "شماره موبایل باید با 09 شروع شود")
    .length(11, "شماره موبایل 11 رقم می باشد")
    .matches(/^\d+$/, "ارقام شماره باید بین 0 تا9 باشد"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

const AuthPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginReq();

      if (!response.ok) {
        throw new Error("خطا در بارگذاری اطلاعات");
      }

      const result = await response.json();
      const user = result.results[0];

      login(user);
      router.push("/dashboard");
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "ورود ناموفق لطفا دوباره تلاش کنید",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>ورود</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            label="شماره موبایل"
            type="tel"
            placeholder="09*********"
            error={errors.phoneNumber?.message}
            {...register("phoneNumber")}
          />

          {errors.root && (
            <div className={styles.error}>{errors.root.message}</div>
          )}

          <Button
            type="submit"
            isLoading={isSubmitting}
            className={styles.button}
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
