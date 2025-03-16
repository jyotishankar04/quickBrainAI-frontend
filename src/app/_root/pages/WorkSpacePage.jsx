import React, { useEffect, useState } from "react";
import RightTab from "../../../components/_root/workspace/RIghtTab";
import useCollapseState from "../../../context/CollapseStateContext";
import LeftTab from "../../../components/_root/workspace/LeftTab";
import { Resizable } from "re-resizable";

const WorkSpacePage = () => {
  const { setIsCollapsed } = useCollapseState();
  const [leftWidth, setLeftWidth] = useState(50); //setting teh width 50%

  useEffect(() => {
    setIsCollapsed(true);
  }, [setIsCollapsed]);

  return (
    <div className="w-full h-full flex">
    
      <Resizable
        defaultSize={{
          width: `${leftWidth}%`,
          height: "100%",
        }}
        minWidth="20%"
        maxWidth="80%"
        enable={{ right: true }} 
        className="h-full"
        onResizeStop={(e, direction, ref, d) => {
          setLeftWidth((prevWidth) => ((prevWidth + d.width) / window.innerWidth) * 100);
        }}
      >
        <LeftTab />
      </Resizable>

      {/* Divider Line */}
      <div className="w-1 bg-gray-300 cursor-ew-resize" />

      {/* Right Panel (flexible width) */}
      <div className="flex-1 h-full">
        <RightTab />
      </div>
    </div>
  );
};

export default WorkSpacePage;
