import RefferalCard from "./RefferalCard";

const RefferalDashboard = () => {
  const data = [
    {
      title: "Total Referrals",
      value: "00",
      subValues: [
        { label: "Today", value: "00" },
        { label: "Yesterday", value: "00" },
        { label: "Last Week", value: "00" },
      ],
    },
    {
      title: "Total Earnings",
      value: "00 $DCRX",
      subValues: [
        { label: "Today", value: "00 $DCRX" },
        { label: "Yesterday", value: "00 $DCRX" },
        { label: "Last Week", value: "00 $DCRX" },
      ],
    },
    {
      title: "Your Wallet Balance",
      value: "00 $DCRX",
      subValues: [],
      hasButton: true,
    },
   
  ];

  return (
    <div className=" py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-4">
        {data.map((item, index) => (
          <RefferalCard
            key={index}
            title={item.title}
            value={item.value}
            subValues={item.subValues}
            hasButton={item.hasButton}
          />
        ))}
      </div>
    </div>
  );
};

export default RefferalDashboard;
