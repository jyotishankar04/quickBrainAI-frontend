import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
        <div className='card flex flex-col gap-4 w-md items-center'>
            <h1 className='text-2xl font-bold'>Sign Up</h1>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="" className='font-semibold'>Email</label>
                <input type="email" className='w-full input input-bordered' placeholder='Enter your email'  />
            </div>
            <Link to="/auth/otp-verification" className='btn btn-primary w-full'>
                Send Verification Link
            </Link>
          <div>
            <span>Already have an account? </span>
            <Link to="/auth/login" className='text-primary'>Login</Link>
          </div>
        </div>

    </div>
  )
}

export default SignUp