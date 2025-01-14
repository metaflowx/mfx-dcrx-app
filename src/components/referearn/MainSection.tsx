import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import HomeSection1 from "../home/Section1";

const ReferEarn = () => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)]  min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id="payment"
    >
      <ConstrainedBox classNames="px-4 py-8 z-20 items-center justify-center">
         <HomeSection1 id="hero" />
       
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default ReferEarn;
