import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectList from "./ui/ProjectList";


const HomeSection5 = () => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)]  min-h-screen items-center justify-center"
     
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Recent Works</SectionTitle>

        
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
