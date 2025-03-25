import { useEffect } from "react";
import { useToggleStarMutation } from "../../../lib/query/react-query";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const ToggleStarDialog = ({ children, id, isStarred, noteTitle }) => {
  const { mutateAsync, isPending, isSuccess, isError, error } =
    useToggleStarMutation();
  const queryclient = useQueryClient();
  // Handle success outside useMutation
  useEffect(() => {
    if (isSuccess) {
      document.getElementById("toggleStarModal" + id).close();
      queryclient.invalidateQueries({ queryKey: ["notes"] });
      toast.success("Note star toggled successfully");
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
        id={"toggleStarModal" + id}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box flex flex-col gap-4 w-full">
          <h3 className="font-bold text-lg">Starred Note</h3>
          <p className="text-sm text-gray-500">
            {isStarred
              ? `Are you sure you want to unstar ${noteTitle}`
              : `Are you sure you want to star ${noteTitle}`}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="btn btn-outline"
              onClick={() => {
                document.getElementById("toggleStarModal" + id).close();
              }}
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className={`btn ${
                isStarred ? "btn-error text-white" : "btn-primary"
              }`}
            >
              {isPending ? (
                <span className="loading loading-spinner"></span>
              ) : isStarred ? (
                "Remove from Starred Notes"
              ) : (
                " Add to Starred Notes"
              )}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ToggleStarDialog;
