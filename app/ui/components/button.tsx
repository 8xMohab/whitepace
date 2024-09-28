import Link from "next/link";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost"; // Variants for styling
  className?: string; // External styling
  children: React.ReactNode; // For the content inside the button
  href: string;
}

// Base Button component
function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Dynamically generate the class names based on the variant
  const baseClass = "rounded-lg text-center flex items-center w-fit"; // Base styling
  const variantClass =
    variant === "primary"
      ? "bg-primaryB text-white" // Primary variant styles
      : variant === "secondary"
        ? "bg-secondaryA text-primaryA" //
        : "bg-transparent border "; // Secondary variant styles

  return (
    <Link className={`${baseClass} ${variantClass} ${className} `} {...props}>
      {children}
    </Link>
  );
}

export default Button;
