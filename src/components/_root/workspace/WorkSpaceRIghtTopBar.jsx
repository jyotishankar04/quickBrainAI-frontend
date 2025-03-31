import React from "react";
import { useActiveTab } from "../../../context/ActiveTabContext";
import { TABS } from "../../../constants/workspace.constants";
import { isMobile } from "react-device-detect";

const WorkSpaceRightTopBar = React.memo(() => {
  const { activeTab, setActiveTab } = useActiveTab();

  if (isMobile) {
    return (
      <div role="tablist" className="tabs grid grid-cols-2 tabs-border">
        {TABS.map((tab, index) => (
          <button
            key={index}
            className={`tab tab-bordered ${
              activeTab === index ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
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
});

export default WorkSpaceRightTopBar;
