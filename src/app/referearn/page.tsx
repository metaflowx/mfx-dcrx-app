import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const ReferEarn = dynamic(
  () => import("@/components/referearn/MainSection")
);

const Home = () => {
  return (
    <PageBox>
      <ReferEarn />
    </PageBox>
  );
};

export default Home;
