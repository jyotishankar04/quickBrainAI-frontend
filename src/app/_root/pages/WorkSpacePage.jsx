import React, { useEffect } from "react";
import RIghtTab from "../../../components/_root/workspace/RIghtTab";
import useCollapseState from "../../../context/CollapseStateContext";
import LeftTab from "../../../components/_root/workspace/LeftTab";
import EditorProvider from "../../../context/EditorContext";

const WorkSpacePage = () => {
  const { setIsCollapsed } = useCollapseState();
  useEffect(() => {
    setIsCollapsed(true);
  }, [setIsCollapsed]);
  return (
    <div className="w-full h-full  grid grid-cols-2">
      <LeftTab />
      <RIghtTab />
    </div>
  );
};

export default WorkSpacePage;
