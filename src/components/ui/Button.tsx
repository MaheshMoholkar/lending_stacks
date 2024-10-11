"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
function Button({ text, delay }: { text: string; delay: number }) {
  const router = useRouter();
  const url = text.replace(" ", "-").toLowerCase();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-gray-200 font-semibold text-gray-900 px-12 py-2 md:px-10 md:py-1 rounded-full hover:bg-gray-300 transition"
    >
      {text}
    </button>
  );
}

export default Button;
