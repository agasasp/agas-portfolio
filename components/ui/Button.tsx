import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
          : "border border-white/20 hover:border-blue-500 hover:text-blue-400"
      )}
    >
      {children}
    </Link>
  );
}