import { useRouter } from "next/navigation";
import CommonButton from "../common/CommonButton";


export default function HomeSection4() {
  const router =useRouter()
  return (
    <main className=" relative overflow-hidden  referBg w-full p-[20px] md:p-[120px]" >
    
     

      {/* Content */}
      <div style={{fontFamily:"Geist"}} className="relative z-10 flex flex-col items-center justify-center  text-center ">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tight">
     
          Let&apos;s Grow Together!
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 mb-12  font-normal">
        Invite your friends, earn exclusive rewards, and be part of the future of decentralized trading. Start referring now!
        </p>
       <CommonButton onClick={()=>router.push("/")} btnName="Refer a friend" />
      </div>

     
    </main>
  );
}