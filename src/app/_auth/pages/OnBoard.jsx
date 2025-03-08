/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const OnBoard = () => {
  const { register, handleSubmit, watch } = useForm();

  useEffect(() => {
    if (watch("repeatPassword") !== watch("password")) {
      console.log("Passwords do not match");
    }
  }, [watch("repeatPassword"), watch("password")]);

  const customSubmit = handleSubmit((data) => {
    if (!data.name || !data.password || !data.repeatPassword) {
      alert("All fields are required");
    }
    toast.success("Successfully Created Account")
  });

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <form onSubmit={customSubmit} className='card flex flex-col gap-4 w-md items-center p-6 shadow-lg'>
        <h1 className='text-2xl font-bold'>Onboard</h1>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-semibold'>Name</label>
          <input
            {...register("name", { required: true })}
            type='text'
            className='w-full input input-bordered'
            placeholder='Enter your name'
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-semibold'>Create Password</label>
          <input
            {...register("password", { required: true })}
            type='password'
            className='w-full input input-bordered'
            placeholder='Create a password'
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-semibold'>Repeat Password</label>
          <input
            {...register("repeatPassword", { required: true })}
            type='password'
            className='w-full input input-bordered'
            placeholder='Repeat your password'
          />
          {watch("repeatPassword") !== watch("password") && <span className='text-error'>Passwords do not match</span>}
        </div>
        <button className='btn btn-primary w-full mt-4' disabled={watch("repeatPassword") !== watch("password")}>Continue</button>
      </form>
    </div>
  );
};

export default OnBoard;
