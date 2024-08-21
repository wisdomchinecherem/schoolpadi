import EnrollmentDropdownList from "./enrollment/EnrollmentDropdownList";

export default function EnrollmentTab  ()  {
  return (
    <div className="md:w-2/3 border rounded-xl p-4 w-full">
      <h3 className="text-lg font-bold">Enrollment Information</h3>
<EnrollmentDropdownList />
    </div>
  );
}

