import React from "react";

const PaymentPrice = ({ price, id, text, length }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="p-10 flex items-center gap-2 flex-[0.5]">
        <p>{length + 1} : </p>
        <p className="font-semibold">{text}</p>
      </div>
      <div className="flex-[0.4]">{id}</div>
      <div className="flex-[0.1]">{price}</div>
    </div>
  );
};

export default PaymentPrice;
