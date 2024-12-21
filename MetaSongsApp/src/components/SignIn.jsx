import React from "react";

const SignIn = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-[40px] shadow-lg w-[30rem] h-[40rem]">
        {children}
      </div>
    </div>
  );
};

export default SignIn;
