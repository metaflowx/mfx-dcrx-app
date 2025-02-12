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

    if (difference <= 0 || difference===undefined) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

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
    <p className="text-[18px] font-bold pb-3">{label}</p>
   <div className="grid grid-cols-4">

      <div className="timerBg">
        <p
          style={{
            fontFamily: "Gemunu Libre, serif",
            // lineHeight: "62px",
          }}
          className="text-[42px] leading-[42px] md:leading-[62px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.days ||0}
        </p>
        <p
          style={{ fontFamily: "Geist, serif" }}
          className="text-[13px] sm:text-[20px] text-center"
        >
          Days
        </p>
      </div>
      <div className="timerBg ">
        <p
          style={{
            fontFamily: "Gemunu Libre, serif",
            // lineHeight: "62px",
          }}
          className="text-[42px] leading-[42px] md:leading-[62px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.hours || 0}
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
            // lineHeight: "62px",
          }}
          className="text-[42px] leading-[42px] md:leading-[62px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.minutes || 0}
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
            // lineHeight: "62px",
          }}
          className="text-[42px] leading-[42px] md:leading-[62px] md:text-[62px] font-bold text-[#2B9AE6]"
        >
          {timeLeft.seconds || 0}
        </p>
        <p
          style={{ fontFamily: "Geist, serif" }}
          className="text-[13px] sm:text-[20px] text-center"
        >
          Seconds
        </p>
      </div>
   </div>
    </>
  );
};

export default CountdownTimer;


