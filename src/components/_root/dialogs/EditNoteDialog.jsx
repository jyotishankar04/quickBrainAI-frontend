import { FaCirclePlus } from "react-icons/fa6";
import TagInput from "../notes/TagsInput";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CreateCategoryDialog from "./CreateCategoryDialog";
import { BiPlus } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useNoteUpdateMutation } from "../../../lib/query/react-query";
import toast from "react-hot-toast";

const EditNoteDialog = ({
  children,
  id,
  noteTitle,
  noteDescription,
  tags,
  category,
  isPrivate,
}) => {
  const [newTags, setNewTags] = useState(tags);
  const queryClient = useQueryClient();
  const { data } = queryClient.getQueryData(["categories"]);
  const { register, handleSubmit, reset } = useForm();

  const { mutateAsync, isPending, isSuccess, isError, error } =
    useNoteUpdateMutation();

  const onSubmit = async (data) => {
    if (isPending) return; // Prevent multiple submissions
    await mutateAsync({
      noteId: id,
      data: {
        noteTitle: data.noteTitle,
        noteDescription: data.noteDescription,
        noteTags: newTags,
        noteCategory: data.noteCategory,
        isPrivate: data.isPrivate,
      },
    });
  };

  // Handle success outside useMutation
  useEffect(() => {
    if (isSuccess) {
      document.getElementById("editNoteModal" + id).close();
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Note updated successfully");
      reset();
      setNewTags([]);
    }
  }, [isSuccess, id, queryClient, reset]);

  // Handle error outside useMutation
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  return (
    <div className="flex justify-end items-center h-full">
      {children}
      <dialog id={"editNoteModal" + id} className="modal">
        {data && (
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Edit Note</h3>
            <p className="py-4">Edit your note here.</p>
            <form action="" className="space-y-4">
              <div className="w-full flex flex-col gap-1">
                <label className="label text-lg">
                  <span className="label-text">Title</span>
                </label>
                <input
                  {...register("noteTitle")}
                  type="text"
                  placeholder=" here"
                  defaultValue={noteTitle}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className="label text-lg">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("noteDescription")}
                  defaultValue={noteDescription}
                  className="textarea textarea-bordered w-full min-h-40 max-h-40"
                  placeholder="here"
                ></textarea>
              </div>
              <div className="flex flex-row items-start w-full gap-3">
                <label className="label text-lg">
                  <span className="label-text font-bold">Private</span>
                </label>
                <input
                  {...register("isPrivate")}
                  type="checkbox"
                  defaultChecked={isPrivate}
                  className="toggle toggle-primary toggle-lg"
                />
              </div>
              <div className="flex flex-col items-start w-full gap-3">
                <label className="label text-lg">
                  <span className="label-text">Category</span>
                </label>
                <div className="flex gap-2 w-full">
                  <select
                    {...register("noteCategory")}
                    defaultValue={category.id}
                    className="select flex-1 ring-blue-800 focus:ring focus:ring-blue-800 border-blue-800 bg-blue-50 w-full px-4 "
                  >
                    {data?.map((cat) => (
                      <option
                        key={cat.id}
                        value={cat.id}
                        className="text-black"
                      >
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <CreateCategoryDialog>
                    <div
                      onClick={() => {
                        document
                          .getElementById("createCategoryModal")
                          ?.showModal();
                      }}
                      className="btn btn-primary btn-circle"
                    >
                      <BiPlus className="text-2xl" />
                    </div>
                  </CreateCategoryDialog>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className="label text-lg">
                  <span className="label-text">Tags</span>
                </label>
                <TagInput
                  placeholder="Add tags..."
                  onTagsChange={setNewTags}
                  allowCreate={true}
                  initialTags={newTags}
                />
              </div>
              <div className="w-full flex justify-end gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("editNoteModal" + id)?.close();
                    reset();
                  }}
                  className="btn btn-outline w-40"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit(onSubmit)}
                  className="btn btn-primary w-40"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default EditNoteDialog;
