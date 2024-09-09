import cubeIcon from "../images/3d-cube.png";

const StudentsDetails = () => {
  return (
    <div className="w-full mt-[2rem] flex flex-row responsive-card-wrapper items-center justify-center gap-4">
      <div className="flex items-center gap-4 responsive-card-revert w-full">
        <div className="p-4 w-full rounded-xl bg-white border-[#E6EAEF] max-w-full shadow-card border">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-1 w-full">
              <div className="flex-col w-full">
                <span className="text-schoolpadi-text-grey-lighter gap-1 font-medium text-[12px] 12px">
                  ID
                </span>
                <div className="text-2xl font-medium text-schoolpadi-text-gray-dark">
                  123456FR
                </div>
              </div>
              <div className="bg-schoolpadi-blue-lighter h-8 w-8 grid place-items-center rounded-lg p-2">
                <img loading="lazy" decoding="async" src={cubeIcon} />
              </div>
            </div>
            <div className="flex gap-1 w-full justify-between">
              <div className="flex flex-col items-center">
                <div className="text-[12px] text-schoolpadi-text-gray-dark">
                  SECTION
                </div>
                <div className="text-[18px] font-medium text-schoolpadi-text-gray-dark">
                  A
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[12px] text-schoolpadi-text-gray-dark">
                  Class
                </div>
                <div className="text-[18px] font-medium text-schoolpadi-text-gray-dark">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second stats */}

        <div className="p-4 w-full rounded-xl bg-white border-[#E6EAEF] max-w-full shadow-card border">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-1 w-full">
              <div className="flex-col w-full">
                <span className="text-schoolpadi-text-grey-lighter gap-1 font-medium text-[12px] 12px">
                  Events
                </span>
                <div className="text-2xl font-medium text-schoolpadi-text-gray-dark">
                  11
                </div>
              </div>
              <div className="bg-schoolpadi-blue-lighter h-8 w-8 grid place-items-center rounded-lg p-2">
                <img decoding="async" loading="lazy" src={cubeIcon} />
              </div>
            </div>
            <div className="flex gap-1 w-full justify-between">
              <div className="flex flex-col items-center">
                <div className="text-[12px] text-schoolpadi-text-gray-dark">
                  Events
                </div>
                <div className="text-[18px] font-medium text-schoolpadi-text-gray-dark">
                  2
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[12px] text-schoolpadi-text-gray-dark">
                  Upcoming Classes
                </div>
                <div className="text-[18px] font-medium text-schoolpadi-text-gray-dark">
                  9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third stats */}

      <div className="p-4 w-full rounded-xl bg-white border-[#E6EAEF] max-w-full shadow-card border">
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-1 w-full">
            <div className="flex-col w-full">
              <span className="text-schoolpadi-text-grey-lighter gap-1 font-medium text-[12px] 12px">
                No of Subjects
              </span>
              <div className="text-2xl font-medium text-schoolpadi-text-gray-dark">
                8
              </div>
            </div>
            <div className="bg-schoolpadi-blue-lighter h-8 w-8 grid place-items-center rounded-lg p-2">
              <img decoding="async" loading="lazy" src={cubeIcon} />
            </div>
          </div>

          {/* subjects and stats */}

          <div className="gap-[50px] flex-wrap flex md:flex-wrap lg:flex-nowrap w-full lg:justify-between">
            {/* /// */}

            <div className="flex flex-col gap-[9px] max-w-fit items-center">
              <div className="text-[12px] text-schoolpadi-text-gray-dark whitespace-nowrap">
                Mathematics
              </div>
              <div className="text-[14px] px-2 font-medium bg-schoolpadi-blue-lighter rounded-[40px] text-blue-400">
                Core
              </div>
            </div>

            {/* ////// */}

            <div className="flex flex-col gap-[9px] max-w-fit items-center">
              <div className="text-[12px] text-schoolpadi-text-gray-dark whitespace-nowrap">
                English
              </div>
              <div className="text-[14px] px-2 font-medium bg-schoolpadi-blue-lighter rounded-[40px] text-blue-400">
                Core
              </div>
            </div>

            {/* ///// */}

            <div className="flex flex-col gap-[9px] max-w-fit items-center">
              <div className="text-[12px] text-schoolpadi-text-gray-dark whitespace-nowrap">
                Biology
              </div>
              <div className="text-[14px] px-2 font-medium bg-warning-text-match text-warnign rounded-[40px]">
                Elective
              </div>
            </div>

            {/* ///// */}

            <div className="flex flex-col gap-[9px] max-w-fit items-center">
              <div className="text-[12px] text-schoolpadi-text-gray-dark whitespace-nowrap">
                Chemistry
              </div>
              <div className="text-[14px] px-2 font-medium bg-schoolpadi-blue-lighter rounded-[40px] text-blue-400">
                Core
              </div>
            </div>

            {/* ///// */}

            <div className="flex flex-col gap-[9px] max-w-fit items-center">
              <div className="text-[12px] text-schoolpadi-text-gray-dark whitespace-nowrap">
                Physics
              </div>
              <div className="text-[14px] px-2 font-medium bg-schoolpadi-blue-lighter rounded-[40px] text-blue-400">
                Core
              </div>
            </div>

            {/* ////// */}

            <div className="flex flex-col gap-[9px] max-w-fit items-center">
              <div className="text-[12px] text-schoolpadi-text-gray-dark whitespace-nowrap">
                Lab
              </div>
              <div className="text-[14px] px-2 font-medium bg-warning-text-match rounded-[40px] text-warnign">
                Elective
              </div>
            </div>

            {/* ////// */}

            <div className="flex flex-col gap-[9px] max-w-fit items-center">
              <div className="text-[12px] text-schoolpadi-text-gray-dark whitespace-nowrap">
                Futher Maths
              </div>
              <div className="text-[14px] px-2 font-medium bg-warning-text-match rounded-[40px] text-warnign">
                Core
              </div>
            </div>

            {/* ////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsDetails;
