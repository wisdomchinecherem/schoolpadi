import Calendar from "./Calendar";

const ClassSchedule = () => {
  return (
    <div className="border border-grayout mt-[2rem] rounded-small p-4">
      <p className="text-schoolpadi-grey-primary font-medium text-sm">
        Academic Session
      </p>
      <Calendar />
    </div>
  );
};

export default ClassSchedule;
