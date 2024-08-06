import SearchComponent from "../../components/reusables/filters/SearchComponent";

export default function TopNav() {
  return (
    <div className="w-full  text-white px-[80px] py-5 flex items-center justify-between">
        <img src="/schoolpadi.svg" alt="school padi image" />
      <div className="text-lg font-bold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <SearchComponent  />
        <button className="p-2  rounded">Profile</button>
      </div>
    </div>
  );
}
