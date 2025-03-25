import Tiptap from "../editor/TipTabEditor";
import WorkSpaceLeftTopBar from "./WorkSpaceLeftTopBar";

const LeftTab = ({ note }) => {
  return (
    <div className="w-full flex-1  xl:h-[80vh] 2xl:h-[88vh]  flex flex-col">
      <Tiptap />
    </div>
  );
};

export default LeftTab;
