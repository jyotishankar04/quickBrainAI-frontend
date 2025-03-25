import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../lib/query/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    mutateAsync: registerUser,
    isPending: isRegisterLoading,
    isSuccess: isRegisterSuccess,
    isError: isRegisterError,
    error: registerError,
  } = useRegisterMutation();

  if (isRegisterSuccess) {
    toast.success("Successfully Registered");
    return navigate("/auth/otp-verification");
  }
  if (isRegisterError) {
    toast.error(registerError.response.data.message);
  }
  const onSubmit = handleSubmit(async (data) => {
    await registerUser(data);
  });

  return (
    <div className="flex justify-center items-center h-full w-full">
      <form
        onSubmit={onSubmit}
        className="card flex flex-col gap-4 w-md items-center"
      >
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            {...register("email", {
              required: true,
              message: "Email is required",
            })}
            type="email"
            className="w-full input input-bordered"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500">{"Email is required"}</span>
          )}
        </div>
        <button
          className={`btn btn-primary w-full mt-4 ${
            isRegisterLoading && "disabled"
          }`}
          disabled={isRegisterLoading}
        >
          {isRegisterLoading ? (
            <span className="loading loading-spinner">Sending code...</span>
          ) : (
            "Send verification code"
          )}
        </button>
        <div>
          <span>Already have an account? </span>
          <Link to="/auth/login" className="text-primary">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
