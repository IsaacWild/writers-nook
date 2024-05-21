import React from "react";
import styles from "./button.module.css";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu_Mono({weight:"400"});

interface StartWritingButtonProps {
  children?: React.ReactNode;
}

const StartWritingButton: React.FC<StartWritingButtonProps> = ({
  children,
}) => {
  return (
    <button className={`${styles.buttonContainer} ${ubuntu.className}`}>
      {children}
    </button>
  );
};

export default StartWritingButton;
