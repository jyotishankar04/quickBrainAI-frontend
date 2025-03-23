import { useForm } from "react-hook-form";
import { FaCirclePlus } from "react-icons/fa6";

import { useCreateCategoryMutation } from "../../../lib/query/react-query";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const CreateCategoryDialog = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const queryClient = useQueryClient();
  console.log(children);

  const { mutateAsync, isPending, isSuccess, isError, error } =
    useCreateCategoryMutation();

  // Handle success outside useMutation
  useEffect(() => {
    if (isSuccess) {
      toast.success("Category created successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      document.getElementById("createCategoryModal")?.close();
      reset();
    }
  }, [isSuccess, queryClient, reset]);

  // Handle error outside useMutation
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  const onSubmit = async (data) => {
    if (isPending) return; // Prevent multiple submissions
    await mutateAsync({ name: data.category });
  };

  return (
    <div className="flex justify-end items-center h-full">
      {children}
      <dialog
        id="createCategoryModal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Create a new category</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="block text-md font-medium">
              Category Name
            </label>
            <input
              {...register("category", {
                required: "Category name is required",
              })}
              type="text"
              id="category"
              name="category"
              className="w-full px-4 py-2 border text-lg border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 bg-blue-50"
              placeholder="Enter category name"
              aria-invalid={errors.category ? "true" : "false"}
            />
            {errors.category && (
              <p className="text-red-500 text-sm" role="alert">
                {errors.category.message}
              </p>
            )}
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            className="btn btn-primary"
            disabled={isPending} // Disable the button while the mutation is pending
          >
            {isPending ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              "Create Category"
            )}
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CreateCategoryDialog;
