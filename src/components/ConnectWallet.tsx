import React from "react";

interface ConnectButtonProps {
  label?: string;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ label = "Connect" }) => {
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

  return (
    <appkit-button
      label={label}
      size="md"
    //   style={buttonStyle}
    //   onMouseEnter={(e:any) => (e.currentTarget.style.opacity = "0.9")}
    //   onMouseLeave={(e:any) => (e.currentTarget.style.opacity = "1")}
    />
  );
};

export default ConnectButton;
