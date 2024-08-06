import Table from "../../reusables/table/Table";

export default function SchoolListTable() {
    const broadcast_column = [  

        { 
          title: "School", 
          key: "school", 
          render: (data) => <p> <span className="bg-[#E6F2FF] p-1 h-2 w-2 rounded-full"></span>   {data.school}</p> 
        },
        {
          title: "School Number",
          key: "school_number",
          render: (data) => <span className="min-w-[12rem]">{data.school_number}</span>,
        },
        { title: "Signup Date ", 
          key: "signup_date", 
          render: (data) => <span className="min-w-[12rem]">{data.signup_date ?? "Not Available"}</span> 
        },
        {
          title: "Expiration Date",
          key: "expiration_date",
          render: (data) => <span>{data.expiration_date ?? "Not Available"}</span>,
        },
        {
          title: "Categories",
          key: "categories",
          render: (data) => (
            <div className="flex space-x-1">
              {data.categories.split(', ').map((category, index) => (
                <span
                  key={index}
                  className=" - bg-[#E6F2FF] text-black p-1 h-6 w-6 flex items-center justify-center rounded-full"
                >
                  {category.charAt(0)}
                </span>
              ))}
            </div>
          ),        },
        {
          title: "",
          key: " ",
          render: (data) => <span>{""}</span>,
        },
        // {
        //   title: "Categories",
        //   key: "categories",
        //   render: (data) => <span className={` ${data.status.toLowerCase() ==="delivered" ? "text-gradient": "text-red" } `}>{data.status ?? "Not Available"}</span>,
        // },
      
      ];
      const data = [
        {
            id:1,
            school:"school 1",
            school_number: "123456",
            signup_date: "2022-06-19",
            expiration_date: "2022-06-30",
            categories: "Nursery, Primary, Secondary",
        },
        {
            id:2,
            school:"school 2",
            school_number: "789012",
            signup_date: "2022-06-20",
            expiration_date: "2022-07-01",
            categories: "Nursery, Primary, Secondary",
        },
        {
            id:3,
            school:"school 3",
            school_number: "345678",
            signup_date: "2022-06-21",
            expiration_date: "2022-07-02",
            categories: "Nursery, Primary, Secondary",
        }
      ]

  return (
    <div className="rounded border">
        <Table columns={broadcast_column ?? []} data={data ?? []} />
    </div>
  )
}
