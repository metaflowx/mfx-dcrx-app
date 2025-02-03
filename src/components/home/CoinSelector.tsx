import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CoinSelector.css"; // Import your CSS file

const coinList: string[] = [
  "BTC", "ETH", "BNB", "XRP", "USDT", "USDC", "SOL", "DOGE", "DAI", "FDUSD"
];

interface CoinSelectorProps {
  coinType?: string;
  setCoinType: (coin: string) => void;
}

const CoinSelector: React.FC<CoinSelectorProps> = ({ coinType, setCoinType }) => {
  return (
    <div className="w-[500px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
        }}
        className="py-4"
      >
        {coinList.map((coin) => (
          <SwiperSlide key={coin} className="flex justify-center">
            <button
              onClick={() => setCoinType(coin)}

             className={`${coinType===coin ? "bg-[#2B9AE6] rounded-md": "coinBgBtn"} " w-[121px] h-[50px]  text-sm"`}
            >
              {coin}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoinSelector;
