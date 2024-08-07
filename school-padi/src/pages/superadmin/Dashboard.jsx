
export default function Dashboard() {
 
  return (
    <section className="">
    {/* <div className="flex  my-10 items-center text-white p-4 justify-between ">
      <h2>School list</h2>
      <button className="bg-[#027FFF] px-6 py-2 rounded-2xl">
        Add School
      </button>
    </div> */}

    <div className=" grid grid-cols-3 ">
      <div className="cols-span-2 ">
<div className="rounded-2xl shadow-md"></div>
      </div>
      <div className="cols-span-1"></div>
      {/* SchoolListTable component goes here */}
      {/* <SchoolListTable data={filteredData} /> */}
    </div>
  </section>  )
}
