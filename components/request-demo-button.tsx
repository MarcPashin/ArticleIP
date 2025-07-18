"use client";

import { useState } from "react";
import { RequestDemoModal } from "./request-demo-modal";

interface RequestDemoButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const RequestDemoButton = ({ className, children }: RequestDemoButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </button>
      
      <RequestDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};