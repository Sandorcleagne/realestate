"use client";
import React from "react";
import Link from "next/link";
const WhatsAppButton = () => {
  const phoneNumber = "918882103359"; // your WhatsApp number with country code
  const message = "Hi! I'm interested in your services."; // optional message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg cursor-pointer z-50 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.56 4.13 1.62 5.94L0 24l6.31-1.64A11.85 11.85 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.94 0-3.84-.5-5.5-1.45l-.4-.23-3.74.97.99-3.63-.26-.43A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.28-7.5c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.74.94-.9 1.13-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.28.29-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.13-.23-.56-.46-.48-.64-.49-.17 0-.36-.02-.56-.02-.19 0-.5.07-.76.36-.26.29-1 1-.98 2.44.02 1.43 1.02 2.8 1.16 2.99.14.19 2 3.05 4.82 4.28.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.14-.26-.21-.54-.36z" />
        </svg>
      </div>
    </Link>
  );
};

export default WhatsAppButton;
