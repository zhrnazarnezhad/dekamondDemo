"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useAuth } from "@/components/providers/authProvider";
import styles from "./dashboard.module.scss";
import Button from "@/components/common/button/button";

const DashboardPage: React.FC = () => {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className={styles.loading}>لطفا چند لحظه صبر کنید</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>به صفحه دشبورد خوش آمدید</h1>
        <Button variant="primary" className={styles.button} onClick={logout}>
          خروج
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.userCard}>
          <Image
            src={user.picture.large}
            alt={user.name.first}
            className={styles.avatar}
            width={96}
            height={100}
            priority
          />
          <h2 className={styles.userName}>
            {user.name.first} {user.name.last}
          </h2>
          <p className={styles.userEmail}>{user.email}</p>
          <p className={styles.userPhone}>{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
