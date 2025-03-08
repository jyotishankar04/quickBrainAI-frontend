import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const customSubmit = handleSubmit((data) => {
    if (!data.email || !data.password) {
      alert("All fields are required");
    }
  });

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <form onSubmit={customSubmit} className='card flex flex-col gap-4 w-md items-center p-6 shadow-lg'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-semibold'>Email</label>
          <input
            {...register("email", { required: true })}
            type='email'
            className='w-full input input-bordered'
            placeholder='Enter your email'
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-semibold'>Password</label>
          <input
            {...register("password", { required: true })}
            type='password'
            className='w-full input input-bordered'
            placeholder='Enter your password'
          />
        </div>
        <button className='btn btn-primary w-full mt-4'>Login</button>
      <div>
        <p className='text-center mt-4'>
          Don't have an account?{' '}
          <Link to='/auth/register' className='text-primary'>
            Register
          </Link>
        </p>
      </div>
      </form>

    </div>
  );
};

export default Login;
