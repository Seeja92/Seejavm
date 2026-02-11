"use client";
import { useRouter } from "next/navigation";

import React from "react";

export default function GotoCartButton() {
  const router = useRouter();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          router.push("/Cart");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
