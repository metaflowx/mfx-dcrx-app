import { useState, useEffect } from "react";

const CountdownTimer = ({
  label,
  targetTime,
}: {
  label: string;
  targetTime: any;
}) => {
  const calculateTimeLeft = () => {
    const now = Math.floor(Date.now() / 1000); // Current time in Unix seconds
    const difference = Number(targetTime) - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (24 * 3600)),
      hours: Math.floor((difference % (24 * 3600)) / 3600),
      minutes: Math.floor((difference % 3600) / 60),
      seconds: difference % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <>
      <div className="timerBg">
        <p
          style={{
            fontFamily: "Gemunu Libre, serif",
            lineHeight: "62px",
          }}
          className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.days}
        </p>
        <p
          style={{ fontFamily: "Geist, serif" }}
          className="text-[13px] sm:text-[20px]"
        >
          Days
        </p>
      </div>
      <div className="timerBg ">
        <p
          style={{
            fontFamily: "Gemunu Libre, serif",
            lineHeight: "62px",
          }}
          className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.hours}
        </p>
        <p
          style={{ fontFamily: "Geist, serif" }}
          className="text-[13px] sm:text-[20px]"
        >
          Hours
        </p>
      </div>
      <div className="timerBg ">
        <p
          style={{
            fontFamily: "Gemunu Libre, serif",
            lineHeight: "62px",
          }}
          className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.minutes}
        </p>
        <p
          style={{ fontFamily: "Geist, serif" }}
          className="text-[13px] sm:text-[20px]"
        >
          Minutes
        </p>
      </div>
      <div className="timerBg ">
        <p
          style={{
            fontFamily: "Gemunu Libre, serif",
            lineHeight: "62px",
          }}
          className="text-[42px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.seconds}
        </p>
        <p
          style={{ fontFamily: "Geist, serif" }}
          className="text-[13px] sm:text-[20px]"
        >
          Seconds
        </p>
      </div>
    </>
  );
};

export default CountdownTimer;

// export default function SaleCountdown() {
//   const startAt = 1738846021; // Replace with your actual startAt timestamp
//   const endAt = 1739105087; // Replace with your actual endAt timestamp

//   return (
//     <div className="flex flex-col items-center gap-4 bg-gray-900 p-4 rounded-lg text-center">
//       <CountdownTimer label="Sale Starts In" targetTime={startAt} />
//       <CountdownTimer label="Sale Ends In" targetTime={endAt} />
//     </div>
//   );
// }
