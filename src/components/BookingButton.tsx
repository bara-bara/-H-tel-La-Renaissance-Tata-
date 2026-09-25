import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BookingButtonProps {
  href: string;
  brand?: "booking" | "agoda";
  label?: string;
  variant?: "primary" | "dark" | "outline";
  className?: string;
}

const variantStyles = {
  primary: "bg-terracotta text-white hover:bg-ink",
  dark: "bg-ink text-white hover:bg-terracotta",
  outline: "border border-ink/20 text-ink hover:bg-ink hover:text-white",
};

const brandStyles = {
  booking: "hover:bg-[#003580] hover:text-white",
  agoda: "hover:bg-[#5C2D91] hover:text-white",
};

export const BookingButton: React.FC<BookingButtonProps> = ({
  href,
  brand = "booking",
  label,
  variant = "primary",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-medium text-base whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${variantStyles[variant]} ${brand ? brandStyles[brand] : ""} ${className}`}
    >
      <span>{label || (brand === "booking" ? "Booking.com" : "Agoda")}</span>
      <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100 shrink-0" />
    </a>
  );
};
