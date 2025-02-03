

import {IconCloud} from "@/components/ui/icon-cloud";
export function ImageRotation() {
  const slugs = [
    "bitcoin",
    "ethereum",
    "litecoin",
    "dogecoin",
    "ripple",
    "cardano",
    "solana",
    "polkadot",
    "binance",
    "tether",
    "usd-coin",
    "shiba",
    "chainlink",
    "uniswap",
    "avalanche",
    "polygon",
    "terra",
    "vechain",
    "cosmos",
    "filecoin",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full m items-center justify-center overflow-hidden rounded-lg bg-background">
      <IconCloud images={images} />
    </div>
  );
}







