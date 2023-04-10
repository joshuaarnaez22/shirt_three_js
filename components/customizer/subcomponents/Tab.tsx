import React from "react";
import { EditorTabsTypes } from "@/services/types";

interface TabProps {
  tab: EditorTabsTypes;
  handleClick: () => void;
}
const Tab = ({ tab, handleClick }: TabProps) => {
  return <div>{tab.name}</div>;
};

export default Tab;
