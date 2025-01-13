import React from 'react'

export default function CommonHeading({heading,fontSize}:{heading:string,fontSize:any}) {
  return (
    <h2  style={{fontFamily:"Geist"}} className={`${fontSize ? fontSize : "text-[42px]"}  gradient-text font-bold `}>{heading}</h2>
  )
}
