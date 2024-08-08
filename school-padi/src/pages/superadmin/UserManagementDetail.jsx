import { useState } from "react";
import { TabButton } from "../../components/reusables/filters";
import { useParams } from "react-router-dom";
import SACard from "../../components/reusables/cards/SACard";
import PortalTraffic from "../../components/charts/PortalTraffic";

const tabs = ["Overview", "Nursery", "Primary", "Secondary"]

export default function UserManagementDetail() {
    const [activeTab, setActiveTab] = useState("Overview");
    const { id } = useParams();

  return (
    <section className="">
      <div className="flex  my-10 items-center text-white p-4 justify-between ">
        <h2>School list</h2>
        <button className="bg-[#027FFF] px-6 py-2 rounded-2xl">
          Add School
        </button>
      </div>

      <div className=" p-3 ">
        <div className="bg-white rounded-2xl  shadow-lg -mt-14">

        <TabButton 
        isBorder
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab} />
        </div>

        <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50" // Placeholder image, replace with actual image source
          alt="User"
          className="rounded-full w-12 h-12 mr-4"
        />
        <h2 className="text-xl font-semibold">The High School</h2>
        <span className="ml-2 bg-green-100 text-green-500 py-1 px-2 rounded-full">Active</span>
      </div>

      <div className="flex space-x-2 mb-4">
        <span className="bg-blue-100 text-blue-500 py-1 px-2 rounded-full">Nursery</span>
        <span className="bg-blue-100 text-blue-500 py-1 px-2 rounded-full">Primary</span>
        <span className="bg-blue-100 text-blue-500 py-1 px-2 rounded-full">Secondary</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <SACard
          title="No of Users"
          mainValue="1000"
          subValues={[
            { label: 'Admins', value: '20' },
            { label: 'Staff', value: '80' },
            { label: 'Students', value: '600' },
            { label: 'Parents', value: '300' },
          ]}
        />
        <SACard
          title="Subscriptions"
          mainValue="$3,600"
          subValues="$900 /per year For the past 4 years"
        />
        <SACard
          title="Add-on Subscriptions"
          mainValue="$480"
          subValues="$120 /per year For the past 4 years"
        />
        <SACard
          title="Nursery"
          mainValue="200"
          subValues={[
            { label: 'Admins', value: '7' },
            { label: 'Staff', value: '20' },
            { label: 'Students', value: '200' },
            { label: 'Parents', value: '100' },
          ]}
        />
        <SACard
          title="Primary"
          mainValue="200"
          subValues={[
            { label: 'Admins', value: '7' },
            { label: 'Staff', value: '30' },
            { label: 'Students', value: '200' },
            { label: 'Parents', value: '100' },
          ]}
        />
        <SACard
          title="Secondary"
          mainValue="200"
          subValues={[
            { label: 'Admins', value: '6' },
            { label: 'Staff', value: '30' },
            { label: 'Students', value: '200' },
            { label: 'Parents', value: '100' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-gray-500 mb-2">School Information</h3>
          <table className="w-full">
            <tbody className=" rounded-2xl">
              <tr>
                <td className="border p-2 bg-[#F9FAFB]">Name</td>
                <td className="py-1">The High School</td>
              </tr>
              <tr>
                <td className="border p-2 bg-[#F9FAFB]">Location</td>
                <td className="py-1">Street, State, Country</td>
              </tr>
              <tr>
                <td className="border p-2 bg-[#F9FAFB]">Owner</td>
                <td className="py-1">Emmanuel Okpong</td>
              </tr>
              <tr>
                <td className="p-2 border bg-[#F9FAFB]">Contact</td>
                <td className="py-1">+234 902 7325 277</td>
              </tr>
              <tr>
                <td className="p-2 bg-[#F9FAFB] border">Categories</td>
                <td className="py-1">Nursery, Primary, Secondary</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-gray-500 mb-2">Portal Traffic</h3>
          <div className="h-48 bg-gray-100">
            <PortalTraffic />
          </div>
        </div>
      </div>
        {/* SchoolListTable component goes here */}
        {/* <SchoolListTable data={filteredData} /> */}
      </div>
    </section>
  )
}
