import CommonButton from "../common/CommonButton";


export default function HomeSection4() {
  return (
    <main className=" relative overflow-hidden  referBg w-full p-[20px] md:p-[120px]" >
    
     

      {/* Content */}
      <div style={{fontFamily:"Geist"}} className="relative z-10 flex flex-col items-center justify-center  text-center ">
        <h1 className="text-2xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Let&apos;s be partners in success
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 mb-12  font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
       <CommonButton btnName="Refer a friend" />
      </div>

     
    </main>
  );
}