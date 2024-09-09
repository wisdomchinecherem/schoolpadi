import schoolPlaceholderLogo from "../images/placeholderidlogo.png";
import qrcode from "../images/qrcode.svg";
import idphoto from "../images/idpicture.png";

const IDCards = () => {
  return (
    <div className="border border-grayout p-4 mt-[18px] rounded-md">
      <div className="border border-[#54585C] rounded-md p-4 max-w-fit">
        {/* School Name and Logo */}
        <div className="flex items-center gap-2">
          <img
            src={schoolPlaceholderLogo}
            alt="School Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-medium">School Name</span>
        </div>

        {/* ID Card Content */}
        <div className="flex items-start justify-between mt-6">
          {/* ID Photo */}
          <img
            src={idphoto}
            alt="ID Photo"
            className="mr-5 object-cover rounded-md"
          />

          {/* Student Info */}
          <div className="flex flex-col text-sm mr-[42px] space-y-1">
            <span className="font-semibold">King David</span>
            <span className="flex items-center justify-between gap-4">
              ID No.: <strong>123456FR</strong>
            </span>
            <span className="flex items-center justify-between gap-4">
              Class: <strong>3</strong>
            </span>
            <span className="flex items-center justify-between gap-4">
              SECTION: <strong>A</strong>
            </span>
            <span className="flex items-center justify-between gap-4">
              DOB: <strong>04-02-2005</strong>
            </span>
          </div>

          {/* QR Code */}
          <img src={qrcode} alt="QR Code" className="" />
        </div>
      </div>
    </div>
  );
};

export default IDCards;
