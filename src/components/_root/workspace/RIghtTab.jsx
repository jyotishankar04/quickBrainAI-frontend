import useActiveTab from "../../../context/ActiveTabContext";
import ChatBot from "./ChatBot";
import PDFViewer from "./PDFViewer";
import WorkSpaceRIghtTopBar from "./WorkSpaceRIghtTopBar";


const RIghtTab = () => {
  const { activeTab } = useActiveTab();
  return (
    <div className="w-full flex flex-col gap-2 border-l h-full">
      <WorkSpaceRIghtTopBar />
      
        <div className="w-full flex-1 flex justify-center items-center">
          {activeTab === 0 ? (
            <PDFViewer
              url={
                "https://res.cloudinary.com/djby1yfko/image/upload/v1741511569/CSR_fsl6cp.pdf"
              }
            />
          ) : (
            <ChatBot />
          )}
        </div>
      
    </div>
  );
};

export default RIghtTab;
