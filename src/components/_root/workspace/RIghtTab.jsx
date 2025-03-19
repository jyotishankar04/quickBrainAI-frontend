import useActiveTab from "../../../context/ActiveTabContext";
import ChatBot from "./ChatBot";
import PDFViewer from "./PDFViewer";
import WorkSpaceRIghtTopBar from "./WorkSpaceRIghtTopBar";

const RightTab = () => {
  const { activeTab } = useActiveTab();
  return (
    <div className="w-full flex flex-col gap-2 border-l h-full">
      <WorkSpaceRIghtTopBar />

      <div className="w-full flex-1 flex justify-center items-center">
        {activeTab === 0 ? (
          <div style={{ width: "100%", height: "100%" }}>
            <PDFViewer url="https://res.cloudinary.com/djby1yfko/image/upload/v1742363220/quickbrainai/pdfs/owdvqoldl8ilt1myqhqp.pdf" />
          </div>
        ) : (
          <ChatBot />
        )}
      </div>
    </div>
  );
};

export default RightTab;
