import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../lib/query/react-query";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isPending, isSuccess } = useLoginMutation();
  const navigate = useNavigate();
  const customSubmit = handleSubmit(async (data) => {
    if (
      !data.email ||
      !data.password ||
      data.email === "" ||
      data.password === ""
    ) {
      toast("Email and Password are required");
      return;
    }

    await mutateAsync(data);
    navigate("/app");
  });
  if (isSuccess) {
    toast.success("Successfully Logged In");
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <form
        onSubmit={customSubmit}
        className="card flex flex-col gap-4 w-md items-center p-6 shadow-lg"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full input input-bordered"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-xs text-red-500">Email is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="w-full input input-bordered"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-xs text-red-500">Password is required</span>
          )}
        </div>
        <button
          className={`btn btn-primary w-full mt-4 ${isPending && "disabled"}`}
          disabled={isPending}
        >
          {isPending ? (
            <span className="loading loading-spinner"> Loading...</span>
          ) : (
            "Login"
          )}
        </button>
        <div>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
