import SchoolListTable from "../../components/tables/superadmin/SchoolListTable";

export default function Home() {
  return (
    <section>
      <div className="flex items-center text-white p-4 justify-between ">
        <h2>School list</h2>
        <button className="bg-[#027FFF] px-6 py-2 rounded-2xl">
          Add School
        </button>
      </div>

      <div className="bg-white h-[70vh]">
        <SchoolListTable />
      </div>
    </section>
  );
}
