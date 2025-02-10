import { IconCloud } from "@/components/ui/icon-cloud";

export function ImageRotation() {
  // const images = [
  //   "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025", // BTC
  //   "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025", // ETH
  //   "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025", // XRP
  //   "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025", // USDT
  //   "https://cryptologos.cc/logos/solana-sol-logo.png?v=025", // SOL
  //   "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=025", // BNB
  //   "https://cryptologos.cc/logos/cardano-ada-logo.png?v=025", // ADA
  //   "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=025", // USDC
  //   "https://cryptologos.cc/logos/tron-trx-logo.png?v=025", // TRX
  //   "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025", // AVAX
  //   "https://cryptologos.cc/logos/toncoin-ton-logo.png?v=025", // TON
  //   "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=040", // DOT
  //   "https://cryptologos.cc/logos/chainlink-link-logo.png?v=025", // LINK
  //   "https://cryptologos.cc/logos/stellar-xlm-logo.png?v=025", // XLM
  //   "https://cryptologos.cc/logos/hedera-hbar-logo.png?v=025", // HBAR
  //   "https://cryptologos.cc/logos/sui-sui-logo.png?v=025", // SUI
  //   "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=025", // LTC
  //   "https://cryptologos.cc/logos/near-protocol-near-logo.png?v=025", // NEAR
  //   "https://cryptologos.cc/logos/aptos-apt-logo.png?v=025", // APT
  //   "https://cryptologos.cc/logos/polygon-matic-logo.png?v=025", // POL (formerly MATIC)
  // ];

  const images = [
    "/globe/aave-aave-logo.png", // aave
    "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025", // ETH
    "/globe/stellar.png", // XRP
    // "/globe/eth-blue.png",
    "/globe/usdt.png", // USDT
    "/globe/Solana-Sol-Color-Logo-PNG.png", // SOL
    "/globe/bnb.png", // BNB
    "/globe/ada.png", // ADA
    "/globe/usdc.png", // USDC
    "/globe/tron.png", // TRX
    "/globe/avax.png", // AVAX
    "/globe/toncoin-ton-logo.png", // TON
    "/globe/polkadot.png", // DOT
    "/globe/Chainlink.png", // LINK
    "/globe/filecoin-fil-logo.png", // XLM
    "/globe/internet-computer-icp-logo.png", // HBAR
    "/globe/near-protocol_14446201.png", // LTC
    "/globe/optimism.png", // NEAR
    "/globe/pngwing.com.png", // APT
    "/globe/sui-sui-logo.png",
    "/globe/polygon-matic-logo.png",
    "/globe/bitcoin.png",
    "/globe/celestia-tia-logo.png",


  ];

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <IconCloud images={images} />
    </div>
  );
}
