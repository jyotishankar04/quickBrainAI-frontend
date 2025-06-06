import { isMobile } from "react-device-detect";
import { useActiveTab } from "../../../context/ActiveTabContext";
import ChatBot from "./ChatBot";
import PDFViewer from "./PDFViewer";
import WorkSpaceRIghtTopBar from "./WorkSpaceRIghtTopBar";

const RightTab = ({ note }) => {
  const { activeTab } = useActiveTab();

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-2 border-l h-full">
        <div className="w-full flex-1 flex justify-center items-center">
          {activeTab === 0 ? (
            <div style={{ width: "100%", height: "100%" }}>
              <PDFViewer url={note && note.data ? note.data.files[0] : ""} />
            </div>
          ) : (
            <ChatBot />
          )}
        </div>
        <div className="w-full mb-6">
          <WorkSpaceRIghtTopBar />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col gap-2 border-l h-full">
      <WorkSpaceRIghtTopBar />
      <div className="w-full flex-1 flex justify-center items-center">
        {activeTab === 0 ? (
          <div style={{ width: "100%", height: "100%" }}>
            <PDFViewer url={note && note.data ? note.data.files[0] : ""} />
          </div>
        ) : (
          <ChatBot />
        )}
      </div>
    </div>
  );
};

export default RightTab;
