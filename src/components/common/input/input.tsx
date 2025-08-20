"use client";

import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className={`${styles.inputContainer} ${className}`}>
        {label && (
          <label htmlFor="inputName" style={{ fontSize: "16px" }}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id="inputName"
          name="inputName"
          className={`${styles.input} ${error ? styles.error : ""}`}
          {...props}
        />

        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
