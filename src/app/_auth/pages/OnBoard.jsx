import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRegisterCompletionMutation } from "../../../lib/query/react-query";
import { useNavigate } from "react-router-dom";

const OnBoard = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    mutateAsync: registerCompletion,
    isPending: isRegisterLoading,
    isSuccess: isRegisterSuccess,
  } = useRegisterCompletionMutation();

  const customSubmit = handleSubmit(async (data) => {
    if (!data.name || !data.password || !data.confirmPassword) {
      alert("All fields are required");
    }
    await registerCompletion(data).catch((error) => {
      toast.error(error.response.data.message);
    });
  });
  if (isRegisterSuccess) {
    toast.success("Successfully Registered");
    navigate("/app");
  }
  return (
    <div className="flex justify-center items-center h-full w-full">
      <form
        onSubmit={customSubmit}
        className="card flex flex-col gap-4 w-md items-center p-6 shadow-lg"
      >
        <h1 className="text-2xl font-bold">Onboard</h1>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full input input-bordered"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-error">Name is required</span>}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Create Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="w-full input input-bordered"
            placeholder="Create a password"
          />
          {errors.password && (
            <span className="text-error">Password is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Repeat Password</label>
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            className="w-full input input-bordered"
            placeholder="Repeat your password"
          />
          {watch("confirmPassword") !== watch("password") && (
            <span className="text-error">Passwords do not match</span>
          )}
          {errors.confirmPassword && (
            <span className="text-error">Repeat Password is required</span>
          )}
        </div>
        <button
          className="btn btn-primary w-full mt-4 disabled:btn-disabled "
          type="submit"
          disabled={
            watch("confirmPassword") !== watch("password") || isRegisterLoading
          }
        >
          {isRegisterLoading ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default OnBoard;
