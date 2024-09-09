import { useState } from "react";
import { assignments, upcomingTestData } from "../placeholder";

import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";

/* 
this table was done using headlessui if you want to add
more features or want to know how it works  >>>

https://headlessui.com/react/menu#installation
*/

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StudentEvents = () => {
  const [TestDate, setTestDate] = useState("Week");
  const [classesDate, setClassesDate] = useState("Monday 24, June 2024");

  return (
    <div className="flex items-center gap-4 justify-center responsive-card-wrapper mt-6">
      {/* PendingAssignments */}

      <div className="p-4 w-full border-2 border-grayout rounded-small">
        <div>
          <div>
            <p className="text-schoolpadi-text-grey-lighter text-small font-medium">
              Pending Assignments
            </p>
          </div>
          <div className="mt-4">
            <TabGroup>
              <TabList className="flex p-1 space-x-1">
                {/* pending tab */}

                <Tab
                  className={
                    "focus:outline-none focus:ring-0 focus:ring-transparent"
                  }
                >
                  {({ selected }) => (
                    <div
                      className={classNames(
                        "w-fit py-2.5 text-small flex items-center gap-2 leading-5 font-medium",
                        selected
                          ? "text-blue-neutral border-b-2 border-blue-neutral"
                          : "text-schoolpadi-grey-secondary border-b-2 border-grayout"
                      )}
                    >
                      Pending
                      <div
                        className={classNames(
                          "rounded-small py-0 text-[10px] font-medium px-2",
                          selected
                            ? "text-white bg-blue-neutral"
                            : "text-schoolpadi-text-gray-dark bg-grayout"
                        )}
                      >
                        2
                      </div>
                    </div>
                  )}
                </Tab>

                {/* pending tab */}

                <Tab
                  style={{ marginLeft: 17 }}
                  className={
                    "focus:outline-none focus:ring-0 focus:ring-transparent"
                  }
                >
                  {({ selected }) => (
                    <div
                      className={classNames(
                        "w-fit py-2.5 text-small flex items-center gap-2 leading-5 font-medium",
                        selected
                          ? "text-blue-neutral border-b-2 border-blue-neutral"
                          : "text-schoolpadi-grey-secondary border-b-2 border-grayout"
                      )}
                    >
                      Done
                      <div
                        className={classNames(
                          "rounded-small py-0 text-[10px] font-medium px-2",
                          selected
                            ? "text-white bg-blue-neutral"
                            : "text-schoolpadi-text-gray-dark bg-grayout"
                        )}
                      >
                        2
                      </div>
                    </div>
                  )}
                </Tab>
              </TabList>
              <TabPanels className="mt-2">
                <TabPanel
                  className={classNames(
                    "bg-white rounded-xl mt-2 overflow-hidden",
                    "focus:outline-none focus:ring-1 ring-offset-0 border-2 border-grayout ring-transparent ring-opacity-0"
                  )}
                >
                  <table className="min-w-full divide-y rounded-xl divide-gray-200">
                    <thead className="bg-gray-50 rounded-tl-xl rounded-tr-xl overflow-hidden">
                      <tr className="rounded-tl-xl text-small rounded-tr-xl overflow-hidden">
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Teachers
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Due Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        ></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {assignments.map((assignment, index) => (
                        <tr
                          className="text-schoolpadi-text-gray-dark font-medium text-small"
                          key={index}
                        >
                          <td className="px-6 py-4 whitespace-nowrap flex items-center">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={assignment.avatar}
                              alt=""
                            />
                            <span className="ml-2">{assignment.teacher}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {assignment.subject}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {assignment.dueDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-blue-600"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel
                  className={classNames(
                    "bg-white rounded-xl p-3",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                  )}
                >
                  {/* Done assignments content */}
                  {assignments.map((assignment, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={assignment.avatar}
                          alt=""
                        />
                        <span className="ml-2">{assignment.teacher}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {assignment.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {assignment.dueDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>

      <div className="responsive-card-revert flex items-center w-full gap-4">
        {/* UpcomingTests */}

        <div className="upcoming-test border w-full border-grayout rounded-xl p-4">
          <div className="text-schoolpadi-text-grey-lighter text-small font-medium">
            Upcoming Tests
          </div>

          <div className="mt-4 pb-4">
            <div className="flex pb-4 px-2 items-center justify-between font-medium text-small">
              <div className="text-schoolpadi-grey-primary">{TestDate}</div>
              <div className="text-blue-neutral cursor-pointer">View all</div>
            </div>

            {/* schedules */}

            <div className="">
              <div className="overflow-y-scroll h-[371px] px-2 scrollblue">
                {upcomingTestData && upcomingTestData.length > 0 ? (
                  upcomingTestData.map((data, index) => (
                    <div key={index} className={`flex items-center`}>
                      <div
                        className={`flex gap-4 justify-between p-2 bg-schoolpadi-grey-50 w-full mt-4 items-center`}
                      >
                        <div className="flex items-center">
                          <div className="w-1 rounded-md h-14 bg-schoolpadi-blue-primary"></div>
                          <div className="flex items-center">
                            <div className="overflow-hidden border-2 ml-2 bg-[#D4AFBD] border-white rounded-full w-12 h-12">
                              <img
                                loading="lazy"
                                decoding="async"
                                src={data.avatar}
                                className={"w-full h-full"}
                              />
                            </div>
                            <div className="flex flex-col text-small ml-[10px] text-schoolpadi-text-gray-dark font-medium">
                              <div>{data.subject}</div>
                              <div>
                                {data.TimeStart} - {data.timeEnd}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="overflow-hidden border-2 ml-2 border-white bg-[#D4AFBD] rounded-full w-6 h-6">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={data.avatarRead}
                            className={"w-full h-full"}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <span>No Upcoming Test</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* UpcomingClasses */}

        <div className="upcoming-test border w-full border-grayout rounded-xl p-4">
          <div className="text-schoolpadi-text-grey-lighter text-small font-medium">
            Upcoming Classes
          </div>

          <div className="mt-4 pb-4">
            <div className="flex pb-4 px-2 items-center justify-between font-medium text-small">
              <div className="text-schoolpadi-grey-primary">{classesDate}</div>
              <div className="text-blue-neutral cursor-pointer">View all</div>
            </div>

            {/* schedules */}

            <div className="">
              <div className="overflow-y-scroll h-[371px] px-2 scrollblue">
                {upcomingTestData && upcomingTestData.length > 0 ? (
                  upcomingTestData.map((data, index) => (
                    <div key={index} className={`flex items-center`}>
                      <div
                        className={`flex gap-4 justify-between p-2 bg-schoolpadi-grey-50 w-full mt-4 items-center`}
                      >
                        <div className="flex items-center">
                          <div className="w-1 rounded-md h-14 bg-schoolpadi-blue-primary"></div>
                          <div className="flex items-center">
                            <div className="overflow-hidden border-2 ml-2 bg-[#D4AFBD] border-white rounded-full w-12 h-12">
                              <img
                                loading="lazy"
                                decoding="async"
                                src={data.avatar}
                                className={"w-full h-full"}
                              />
                            </div>
                            <div className="flex flex-col text-small ml-[10px] text-schoolpadi-text-gray-dark font-medium">
                              <div>{data.subject}</div>
                              <div>
                                {data.TimeStart} - {data.timeEnd}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="overflow-hidden border-2 ml-2 border-white bg-[#D4AFBD] rounded-full w-6 h-6">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={data.avatarRead}
                            className={"w-full h-full"}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center md:text-lg font-bold text-schoolpadi-text-grey-lighter lg:text-lg">
                    <span>There are no Upcoming Classes</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEvents;
