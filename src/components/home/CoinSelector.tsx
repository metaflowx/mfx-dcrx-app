import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CoinSelector.css"; // Import your CSS file
import { zeroAddress } from "viem";

const coinList: any[] = [
  {
    tokenname:"BTC",
    address:"0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf"
  },
  {
     tokenname:"ETH",
    address:"0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e"
  },
  {
     tokenname:"BNB",
    address:zeroAddress
  },
  {
     tokenname:"XRP",
    address:"0x93A67D414896A280bF8FFB3b389fE3686E014fda"
  },
  {
     tokenname:"USDT",
    address:"0xB97Ad0E74fa7d920791E90258A6E2085088b4320"
  },
  {
     tokenname:"USDC",
    address:"0x51597f405303C4377E36123cBc172b13269EA163"
  },
  {
     tokenname:"SOL",
    address:"0x0E8a53DD9c13589df6382F13dA6B3Ec8F919B323"
  },
  {
    tokenname:"DOGE",
   address:"0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8"
 },
  {
     tokenname:"DAI",
    address:"0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA"
  },
  {
     tokenname:"FDUSD",
    address:"0x390180e80058A8499930F0c13963AD3E0d86Bfc9"
  },
 
 

];

interface CoinSelectorProps {
  coinType?: any;
  setCoinType: any;
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
        {coinList.map((coin,index) => (
          <SwiperSlide key={index+1} className="flex justify-center">
            <button
              onClick={() => setCoinType({address:coin?.address,tokenname:coin.tokenname})}

             className={`${coinType?.tokenname===coin?.tokenname ? "bg-[#2B9AE6] rounded-md": "coinBgBtn"} " w-[121px] h-[50px]  text-sm"`}
            >
              {coin?.tokenname}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoinSelector;
