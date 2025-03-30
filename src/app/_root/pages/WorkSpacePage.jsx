/* eslint-disable no-unused-vars */
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

const WorkSpacePage = () => {
  const { setIsCollapsed } = useCollapseState();
  const [leftWidth, setLeftWidth] = useState(50); //setting the width 50%
  const { editor } = useEditorContext();

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
    refetch: refetchNote,
  } = useNoteByIdQuery(noteId);

  useEffect(() => {
    if (isNoteSuccess) {
      if (editor && note.data.noteContent) {
        editor.commands.setContent(note.data.noteContent);
      }
    }
  }, [isNoteSuccess, note, editor]);

  useEffect(() => {
    if (isNoteError) {
      toast.error(noteError.message);
    }
  }, [isNoteError, noteError]);

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
