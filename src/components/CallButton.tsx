"use client";
import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+911234567890"
      className="fixed bottom-6 right-6 bg-pink-600 text-white rounded-full p-4 shadow-lg hover:bg-pink-700 transition"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
