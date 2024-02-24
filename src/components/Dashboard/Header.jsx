"use client";

import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between">
      <button onClick={handleBack} className="text-color-primary">
        <ArrowCircleLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
