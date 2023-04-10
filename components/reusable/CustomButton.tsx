import state from "@/services/store";
import React from "react";
import { useSnapshot } from "valtio";

interface BtnProps {
  title: string;
  handleClick: () => void;
  customStyle: string;
  type: string;
}
const CustomButton = ({ title, customStyle, type, handleClick }: BtnProps) => {
  const snapshot = useSnapshot(state);
  const getBtnColor = (btnType: string) => {
    if (btnType === "filled") {
      return {
        backgroundColor: snapshot.color,
        color: "white",
      };
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className={`px-2 py-2.5 rounded-md ${customStyle}`}
        style={getBtnColor(type)}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
