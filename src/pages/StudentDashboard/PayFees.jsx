import { useState } from "react";
import pluswhite from "../../components/StudentDashboard/images/pluswhite.svg";
import creditCard from "../../components/StudentDashboard/images/card-payment.svg";
import bankTransfer from "../../components/StudentDashboard/images/bankTransfer.svg";

import CreditCardPayment from "../StudentDashboard/paymentMethods/CreditCardPayment";
import BankTransferPayment from "../StudentDashboard/paymentMethods/BankTransferPayment";
import PaystackPayment from "../StudentDashboard/paymentMethods/PaystackPayment";
import MonnifyPayment from "../StudentDashboard/paymentMethods/MonnifyPayment";

const PayFees = () => {
  // State to keep track of the active payment method
  const [activePaymentMethod, setActivePaymentMethod] = useState("Credit Card");

  // Define the available payment methods
  const cardPaymentsMethods = [
    { method: "Credit Card", img: creditCard },
    { method: "Bank Transfer", img: bankTransfer },
    { method: "Paystack", img: bankTransfer },
    { method: "Monnify", img: bankTransfer },
  ];

  // Function to handle clicking on a payment method
  const handlePaymentMethodClick = (method) => {
    setActivePaymentMethod(method);
  };

  // Conditional rendering of payment method components
  const renderPaymentMethodComponent = () => {
    switch (activePaymentMethod) {
      case "Credit Card":
        return <CreditCardPayment />;
      case "Bank Transfer":
        return <BankTransferPayment />;
      case "Paystack":
        return <PaystackPayment />;
      case "Monnify":
        return <MonnifyPayment />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-[39px] flex items-center justify-between">
        <p className="text-[24px] text-white font-medium">Fees & Invoicing</p>
        <div className="bg-[#027FFF] cursor-pointer py-2 px-3 rounded-lg flex items-center justify-center">
          <img src={pluswhite} alt="plus icon" />
          <span className="ml-[10px] text-sm text-white font-medium">
            Pay Fees
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-light px-8 py-[11px] mt-[18px]">
        <p className="text-[24px] text-[#6E7479] font-medium">Academic Fee</p>
      </div>

      {/* Payment methods */}
      <div className="flex w-full my-[18px] gap-[10rem]">
        <div>
          <p className="text-[18px] font-medium text-nowrap text-[#54585C]">
            Select Payment Method:
          </p>
          <div className="mt-[32px] max-w-fit">
            {cardPaymentsMethods.map((cardPaymentsMethod, index) => (
              <div
                key={`method-${index}`}
                onClick={() =>
                  handlePaymentMethodClick(cardPaymentsMethod.method)
                }
                className={`${
                  activePaymentMethod === cardPaymentsMethod.method
                    ? "bg-[#027FFF] text-white"
                    : "bg-[#EEF1F4] text-[#8E959C]"
                } py-3 px-4 flex items-center gap-1 rounded-lg cursor-pointer mt-4`}
              >
                <img
                  src={cardPaymentsMethod.img}
                  alt={cardPaymentsMethod.method}
                />
                <span>{cardPaymentsMethod.method}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="border border-grayout p-4 w-full rounded-xl">
          <div>
            <div className="flex text-[#8E959C] text-sm items-center justify-between">
              <span>Academic Session</span>
              <span>SY 2024</span>
            </div>
            <div className="flex text-[#8E959C] text-sm items-center justify-between mt-4">
              <span>Section:</span>
              <span>SECTION A</span>
            </div>
            <div className="flex text-[#8E959C] text-sm items-center justify-between mt-4">
              <span>Class:</span>
              <span>Class 3</span>
            </div>
            <div className="flex text-[#000000] text-sm items-center justify-between mt-4">
              <span>Total:</span>
              <span>$12,000.00</span>
            </div>
          </div>

          {/* Conditional Rendering of Payment Components */}
          <div className="border border-grayout rounded-xl mt-4 p-10">
            {renderPaymentMethodComponent()}
            <button className="text-center align-middle bg-[#027FFF] py-4 px-6 mt-[52px] rounded-lg w-full text-white">
              Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayFees;
