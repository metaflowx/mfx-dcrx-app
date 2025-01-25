
import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import Link from "next/link";
import React from "react";

interface ConnectButtonProps {
  label?: string;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ label = "Buy Now" }) => {
  const buttonStyle = {
    background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%)",
    color: "black",
    width: "237px",
    height: "60px",
    borderRadius: "13px",
    fontSize: "21px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "block",
    transition: "opacity 0.3s ease-in-out",

  };
  const { address, isConnected, } = useAppKitAccount()
  const { disconnect } = useDisconnect()
  const { open, close } = useAppKit()

  return (
    // <appkit-button
    //   label={label}
    //   size="md"
    // />
    <div>
      {!address ?
        <Link style={{
          background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%)",
          color: "black",
          padding: '0.7rem 2rem',
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "block",
          transition: "opacity 0.3s ease-in-out",
          whiteSpace:"pre"
        }} onClick={async () => open()} href={""}>{label}</Link>
        :
        <appkit-account-button
        balance="hide"

        />

      }



    </div>
  );
};

export default ConnectButton;
