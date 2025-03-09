// components/WorkSpaceRIghtTopBar.js
import React from "react";
import useActiveTab from "../../../context/ActiveTabContext";
import { TABS } from "../../../constants/workspace.constants";

const WorkSpaceRIghtTopBar = () => {
  const { activeTab, setActiveTab } = useActiveTab();

  return (
    <div role="tablist" className="tabs tabs-border">
      {TABS.map((tab, index) => (
        <a
          key={index}
          className={`tab tab-bordered ${
            activeTab === index ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};

export default WorkSpaceRIghtTopBar;
