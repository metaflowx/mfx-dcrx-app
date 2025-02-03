import React from 'react'

export default function CommonButton({btnName,width,onClick}:{btnName:string,width?:string,onClick?:any}) {
  return (
    <button
    onClick={()=>{
      if(onClick){
        onClick()
      }
    }}
    style={{
      background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
    }}
    className={`text-black ${width ? width :"w-[237px]"}   sm:block h-[60px] rounded-[13px] text-[21px] font-bold shadow-md hover:opacity-90`}
  >
   {btnName}
  </button>
  )
}
