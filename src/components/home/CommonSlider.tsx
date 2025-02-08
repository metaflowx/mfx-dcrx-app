"use client"; // Ensure you're using this in Next.js components with React hooks or Swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardData {
  title: string;
  description: string;
}

interface CommonSliderProps {
  cardData: CardData[];
}

const CommonSlider: React.FC<CommonSliderProps> = ({ cardData }) => {
  return (
    <div className="relative">

    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={false}
      loop={true}
      pagination={{ clickable: true, el: ".custom-pagination" }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="mySwiper"
    >
      {cardData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 cardBorderBgBorder rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4 mt-4">
              <img
                src="/crypto/dollarsymbol.png"
                alt={item.title}
                style={{ width: "89px", height: "92px" }}
              />
            </div>
            <h3 className="text-xl gradient-text font-bold py-6">{item.title}</h3>
            <p className="text-sm text-gray-300 pb-12 font-bold">{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   
    </div>
  );
};

export default CommonSlider;
