import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="inline-block h-32 w-32 animate-spin rounded-full border-[6px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] absolute top-[45%]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
      </div>
    </div>
  );
};

export default Loader;
