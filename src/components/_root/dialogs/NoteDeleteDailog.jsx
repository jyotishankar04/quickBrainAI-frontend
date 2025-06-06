import { useEffect } from "react";
import { useDeleteNoteMutation } from "../../../lib/query/react-query";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const NoteDeleteDailog = ({ children, id, noteTitle }) => {
  const { mutateAsync, isPending, isSuccess, isError, error } =
    useDeleteNoteMutation();

  const queryclient = useQueryClient();
  // Handle success outside useMutation
  useEffect(() => {
    if (isSuccess) {
      document.getElementById("deleteNoteModal" + id).close();
      queryclient.invalidateQueries({ queryKey: ["notes"] });
      queryclient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Note deleted successfully");
    }
  }, [isSuccess, id, queryclient]);

  // Handle error outside useMutation
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  const onSubmit = async () => {
    await mutateAsync(id);
  };
  return (
    <div className="flex justify-end items-center h-full">
      {children}
      <dialog
        id={"deleteNoteModal" + id}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box flex flex-col gap-4 w-full">
          <h3 className="font-bold text-lg">Delete Note</h3>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete{" "}
            <span className="font-bold text-error">{noteTitle}</span>?
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="btn  btn-outline"
              onClick={() => {
                document.getElementById(`deleteNoteModal${id}`).close();
              }}
            >
              Cancel
            </button>
            <button
              disabled={isPending}
              className={`btn  btn-error text-white `}
              onClick={onSubmit}
            >
              {isPending ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NoteDeleteDailog;
