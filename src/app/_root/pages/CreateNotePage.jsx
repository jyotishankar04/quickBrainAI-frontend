import React, { useState, useRef, useEffect } from "react";
import TagInput from "../../../components/_root/notes/TagsInput";
import { useForm } from "react-hook-form";
import { createNoteValidator } from "../../../lib/zod/zod.validator";
import toast from "react-hot-toast";
import {
  useCategoriesQuery,
  useCreateNoteMutation,
} from "../../../lib/query/react-query";
import LoadingModal from "../../../components/_root/LoadingModel";
import { useNavigate } from "react-router-dom";
import CreateCategoryDialog from "../../../components/_root/dialogs/NoteDeleteDailog";

const CreateNotePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    data: categories,
    isPending: isCategoryLoading,
    isSuccess: isCategorySuccess,
  } = useCategoriesQuery();
  const {
    mutateAsync: createNote,
    isPending: isNoteCreating,
    isSuccess: isNoteCreated,
    isError: isNoteError,
    error: noteError,
  } = useCreateNoteMutation();
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [note, setNote] = useState({
    documentType: "",
    file: null,
  });

  const fileInputRef = useRef(null);

  const handleNoteChange = (field, value) => {
    setNote((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleNoteChange("file", file);
    }
  };
  useEffect(() => {
    if (isNoteCreated) {
      reset();
      setNote({
        documentType: "",
        file: null,
      });
      setTags([]);
      toast.success("Note created successfully");
    }
  }, [isNoteCreated, reset]);
  useEffect(() => {
    if (isNoteError) {
      toast.error(noteError.message);
    }
  }, [isNoteError, noteError]);

  const onSubmit = handleSubmit(async (data) => {
    const validate = createNoteValidator.safeParse({
      title: data.title,
      description: data.description,
      category: data.category,
      tags,
      file: note.file,
      isPrivate: data.isPrivate,
    });

    if (!validate.success) {
      toast.error(validate.error.message);
      return;
    }

    const formData = new FormData();
    formData.append("noteTitle", data.title);
    formData.append("noteDescription", data.description);
    formData.append("noteCategory", data.category);
    formData.append("isPrivate", data.isPrivate);
    formData.append("noteTags", tags); // Ensure tags are properly formatted

    if (note.file) {
      formData.append("pdfFile", note.file);
    }

    try {
      const response = await createNote(formData);
      if (response.success) {
        navigate("/app/workspace" + "/" + response.data.id);
      }
    } catch (error) {
      console.error("Error creating note:", error);
      toast.error("Failed to create note. Please try again.");
    }
  });

  if (isNoteCreating) {
    return (
      <LoadingModal
        isVisible={isNoteCreating}
        text="Creating Note..."
        textContext="We are creating your note.."
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-blue-600 hover:text-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back
          </button>
          <h1 className="text-2xl font-semibold text-blue-900 mx-auto">
            Create New Note
          </h1>
          <div className="w-[70px]"></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-lg border border-blue-100 p-6 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Title
            </label>
            <input
              disabled={isNoteCreating}
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 bg-blue-50"
              placeholder="Enter note title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Description
            </label>
            <textarea
              disabled={isNoteCreating}
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 bg-blue-50"
              placeholder="Enter note description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              disabled={isNoteCreating}
              type="checkbox"
              {...register("isPrivate")}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-sm text-gray-700">Private note</label>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Document Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleNoteChange("documentType", "blank")}
                className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-all duration-200 ${
                  note.documentType === "blank"
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <i className="fas fa-file-alt text-2xl mb-2"></i>
                <div className="text-sm">Blank Document</div>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-all duration-200 ${
                  note.documentType === "pdf"
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <i className="fas fa-file-pdf text-2xl mb-2"></i>
                <div className="text-sm">Upload PDF/DOCX</div>
              </button>
              <input
                disabled={isNoteCreating}
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
            {note.file && (
              <div className="mt-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-md">
                <i className="fas fa-paperclip mr-2"></i>
                Selected file: {note.file.name}
              </div>
            )}
          </div>

          <div className="">
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Category
            </label>
            {!isCategoryLoading ? (
              <div className="flex items-center w-full">
                <select
                  disabled={isNoteCreating}
                  {...register("category")}
                  defaultValue="Pick a browser"
                  className="select flex-1 ring-blue-800 focus:ring focus:ring-blue-800 border-blue-800 bg-blue-50 w-full px-4 "
                >
                  {isCategorySuccess ? (
                    categories?.data.map((category) => (
                      <option
                        key={category.id}
                        defaultValue={category.name == "general"}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))
                  ) : (
                    <option defaultValue={true} value={"general"}>
                      General
                    </option>
                  )}
                </select>
                <CreateCategoryDialog />
              </div>
            ) : (
              <div>
                <span className="loading loading-spinner"></span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Tags
            </label>
            <TagInput
              initialTags={tags}
              onTagsChange={setTags}
              allowCreate={true}
              placeholder="Type and press enter..."
            />
          </div>

          <div className="pt-4">
            <button
              disabled={isNoteCreating}
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700"
            >
              {isNoteCreating ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Create Note"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNotePage;
