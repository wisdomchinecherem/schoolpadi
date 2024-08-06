import Table from "../../reusables/table/Table";

export default function SchoolListTable() {
    const broadcast_column = [  

        { 
          title: "School", 
          key: "school", 
          render: (data) => <span>{data.school}</span> 
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
          render: (data) => <span>{data.categories ?? "Not Available"}</span>,
        },
        {
          title: "",
          key: " ",
          render: (data) => <span>{"Not Available"}</span>,
        },
        // {
        //   title: "Categories",
        //   key: "categories",
        //   render: (data) => <span className={` ${data.status.toLowerCase() ==="delivered" ? "text-gradient": "text-red" } `}>{data.status ?? "Not Available"}</span>,
        // },
      
      ];
      
  return (
    <div className="rounded border">
        <Table columns={broadcast_column ?? []} data={[]} />
    </div>
  )
}
