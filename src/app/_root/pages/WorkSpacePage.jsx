import React, { useEffect, useState } from "react";
import RightTab from "../../../components/_root/workspace/RIghtTab";
import useCollapseState from "../../../context/CollapseStateContext";
import LeftTab from "../../../components/_root/workspace/LeftTab";
import { Resizable } from "re-resizable";
import { useNoteByIdQuery } from "../../../lib/query/react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import LoadingModal from "../../../components/_root/LoadingModel";
import { useEditorContext } from "../../../context/EditorContext";
import { isMobile } from "react-device-detect";
import { MenuBar } from "../../../components/_root/editor/TipTapEditorMenu";

const WorkSpacePage = () => {
  const { setIsCollapsed } = useCollapseState();
  const [leftWidth, setLeftWidth] = useState(50); // setting the width 50%
  const { editor } = useEditorContext();
  const [activeTab, setActiveTab] = useState("left");

  useEffect(() => {
    setIsCollapsed(true);
  }, [setIsCollapsed]);

  const { noteId } = useParams();

  const {
    data: note,
    isPending: isNotePending,
    isError: isNoteError,
    error: noteError,
    isSuccess: isNoteSuccess,
  } = useNoteByIdQuery(noteId);

  useEffect(() => {
    if (isNoteSuccess) {
      if (editor && note.data) {
        editor.commands.setContent(note.data.noteContent);
      }
    }
  }, [isNoteSuccess, note, editor, noteId]);

  useEffect(() => {
    if (isNoteError) {
      toast.error(noteError.message);
    }
  }, [isNoteError, noteError]);

  if (isMobile) {
    return (
      <div className="w-full h-full flex flex-col">
        <LoadingModal isVisible={isNotePending} text="Loading Note" />
        <div className={`w-full ${activeTab === "right" ? "hidden" : ""}`}>
          <MenuBar />
        </div>
        <div className="tabs tabs-boxed w-full grid grid-cols-2">
          <button
            className={`tab ${
              activeTab === "left" ? "tab-active bg-base-300" : ""
            }`}
            onClick={() => setActiveTab("left")}
          >
            Left Tab
          </button>
          <button
            className={`tab ${
              activeTab === "right" ? "tab-active bg-base-300" : ""
            }`}
            onClick={() => setActiveTab("right")}
          >
            Right Tab
          </button>
        </div>
        <div className="flex-1 w-full">
          {activeTab === "left" ? (
            <LeftTab note={isNoteSuccess ? note : null} />
          ) : (
            <RightTab note={isNoteSuccess ? note : null} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex">
      <LoadingModal isVisible={isNotePending} text="Loading Note" />
      <Resizable
        defaultSize={{ width: `${leftWidth}%`, height: "100%" }}
        minWidth="20%"
        maxWidth="55%"
        enable={{ right: true }}
        className="h-full"
        onResizeStop={(d) => {
          setLeftWidth(
            (prevWidth) => ((prevWidth + d.width) / window.innerWidth) * 100
          );
        }}
      >
        <LeftTab note={isNoteSuccess ? note : null} />
      </Resizable>
      <div className="w-1 bg-gray-300 cursor-ew-resize " />
      <div className="flex-1 h-full">
        <RightTab note={isNoteSuccess ? note : null} />
      </div>
    </div>
  );
};

export default React.memo(WorkSpacePage);
