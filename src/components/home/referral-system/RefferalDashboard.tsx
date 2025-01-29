import RefferalCard from "./RefferalCard";

const RefferalDashboard = () => {
  const data = [
    {
      title: "Total Referrals",
      value: "00",
      symbol:"",
      earn:"/refer/earn.png",
      subValues: [
        { label: "Today", value: "00",images:"/refer/today.png" },
        { label: "Yesterday", value: "00",images:"/refer/yesterday.png" },
        { label: "Last Week", value: "00",images:"/refer/lastweek.png" },

      ],
    },
    {
      title: "Total Earnings",
      value: "00",
      symbol:"$DCRX",
      earn:"/refer/earn.png",
      subValues: [
        { label: "Today", value: "00 $DCRX",images:"/refer/today.png" },
        { label: "Yesterday", value: "00 $DCRX",images:"/refer/yesterday.png" },
        { label: "Last Week", value: "00 $DCRX",images:"/refer/lastweek.png" },
      ],
    },
    {
      title: "Your Wallet Balance",
      value: "00",
      symbol:"$DCRX",
      earn:"",
      subValues: [],
      hasButton: true,
    },
   
  ];

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 w-full p-6">
        {data.map((item, index) => (
          <RefferalCard
            key={index}
            title={item.title}
            value={item.value}
            subValues={item.subValues}
            hasButton={item.hasButton}
            symbol={item.symbol}
            earnsymbol={item.earn}
          />
        ))}
      </div>
    </div>
  );
};

export default RefferalDashboard;
