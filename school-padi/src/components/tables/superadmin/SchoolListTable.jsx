import Table from "../../reusables/table/Table";
import PropTypes from "prop-types"
export default function SchoolListTable({data}) {
    const broadcast_column = [  

        { 
          title: "School", 
          key: "school", 
          render: (data) => <p className="flex   gap-2"> <img className="" src="/person.svg" />   {data.school}</p> 
        },
        {
          title: "School Number",
          key: "school_number",
          render: (data) => <span className="min-w-[10rem]">{data.school_number}</span>,
        },
        { title: "Signup Date ", 
          key: "signup_date", 
          render: (data) => <span className="min-w-[10rem]">{data.signup_date ?? "Not Available"}</span> 
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
                  className={` ${index ===0 && "-ml-4" } - bg-[#E6F2FF] text-black p-1 h-6 w-6 flex items-center justify-center rounded-full`}
                >
                    {/* {index} */}
                  {category.charAt(0)}
                </span>
              ))}
            </div>
          ),        },
        {
          title: "",
          key: " ",
          render: (data) => <div className="flex items-end gap-x-4"> <img className="w-6 h-6" src="/info-circle.svg" /> 
          <img className="w-6 h-6" src="/edit.svg"  />
          <img className="w-6 h-6" src="/lock.svg" />
          <img className="w-6 h-6" src="/delete.svg" />
           </div>,
        },

      
      ];
     

  return (
    <div className="rounded border text-[#8E959C]">
        <Table columns={broadcast_column ?? []} data={data ?? []} />
    </div>
  )
}


SchoolListTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  };