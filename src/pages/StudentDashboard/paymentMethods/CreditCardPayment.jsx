import PayCard from "../../../components/StudentDashboard/images/PayCard.png";

const CreditCardPayment = () => {
  return (
    <div>
      <div className="flex items-center gap-[15px]">
        <img src={PayCard} />
        <span>Card Information</span>
      </div>
      <div className="mt-[40px]">
        <div className="flex gap-4 items-center justify-between">
          <div className="w-full">
            <p className="text-sm font-medium text-[#54585C]">Name on Card</p>
            <input
              type="text"
              className="outline-none border w-full border-grayout py-[18px] px-4 rounded-md text-sm text-[#D3DBE3] placeholder:text-[#D3DBE3] placeholder:text-sm"
              placeholder="Placeholder"
            />
          </div>

          <div className="w-full">
            <p>Card Number</p>
            <input
              type="text"
              className="outline-none w-full border border-grayout py-[18px] px-4 rounded-md text-sm text-[#D3DBE3] placeholder:text-[#D3DBE3] placeholder:text-sm"
              placeholder="0000 0000 0000 0000"
            />
          </div>
        </div>

        {/*  */}

        <div className="flex gap-4 mt-4 items-center justify-between">
          <div className="w-full">
            <p>Name on Card</p>
            <input
              type="text"
              className="outline-none border border-grayout py-[18px] px-4 rounded-md text-sm text-[#D3DBE3] w-full placeholder:text-[#D3DBE3] placeholder:text-sm"
              placeholder="000"
            />
          </div>

          <div className="w-full">
            <p>Card Number</p>
            <input
              type="text"
              className="outline-none border border-grayout py-[18px] px-4 rounded-md text-sm text-[#D3DBE3] w-full placeholder:text-[#D3DBE3] placeholder:text-sm"
              placeholder="dd/mm/yy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPayment;
