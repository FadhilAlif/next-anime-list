"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold text-color-accent">
        404 | Page Not Found
      </h2>
      <p className="text-color-primary text-md font-semibold">
        Could not find requested resource
      </p>
      <button
        onClick={() => router.back()}
        className="text-color-primary text-md font-semibold underline hover:text-color-accent"
      >
        Back
      </button>
    </div>
  );
}
