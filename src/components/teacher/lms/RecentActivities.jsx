import { useState } from "react";
import { BsThreeDots } from "react-icons/bs"; // Example icon for more options
import { FiThumbsUp, FiMessageCircle } from "react-icons/fi"; // Like and Comment Icons
import { IoFilter } from "react-icons/io5";

const RecentActivities = () => {
  // Dummy data for recent activities
  const initialActivities = [
    {
      id: 1,
      name: "Alison Werner",
      time: "07/19 10:42 AM",
      content: "Learning simple calculus paves way for complex problems",
      likes: 0,
      comments: 0,
      profileImage:
        "https://via.placeholder.com/40", // Replace with actual image URL
    },
  ];

  // State to manage activities
  const [activities, setActivities] = useState(initialActivities);
  const [showAll, setShowAll] = useState(false);

  // Dummy additional data to simulate loading more
  const additionalActivities = [
    {
      id: 2,
      name: "John Doe",
      time: "07/18 09:30 AM",
      content: "Understanding the fundamentals of algebra helps in solving complex equations.",
      likes: 1,
      comments: 2,
      profileImage:
        "https://via.placeholder.com/40", // Replace with actual image URL
    },
    // Add more activities as needed
  ];

  const handleLoadMore = () => {
    setShowAll(true);
    setActivities([...activities, ...additionalActivities]);
  };

  return (
    <div className=" mt-10 mx-auto bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg ">Recent Activities</h2>
        <button className="text-gray-500 border px-3 py-1 flex items-center gap-3 rounded">
          Filter <IoFilter />
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-center mb-3">
              <img
                src={activity.profileImage}
                alt={activity.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold text-sm">{activity.name}</h4>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
              <button className="ml-auto text-gray-500">
                <BsThreeDots />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-4">{activity.content}</p>
            <div className="flex items-center space-x-4 mb-2">
              <button className="flex border px-3 py-1 items-center gap-3 rounded  text-gray-500">
                <FiThumbsUp className="mr-1" />
                Like {activity.likes}
              </button>
              <button className="flex items-center text-gray-500 border px-3 py-1 gap-3 rounded">
                <FiMessageCircle className="mr-1" />
                Comment {activity.comments}
              </button>
            </div>
            <input
              type="text"
              placeholder="Comment..."
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="text-blue-500 hover:underline"
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentActivities;
