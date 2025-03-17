import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { useRegisterVerificationMutation } from "../../../lib/query/react-query";

const OtpVerification = () => {
  const {
    mutateAsync: registerVerification,
    isPending: isRegisterLoading,
    isSuccess: isRegisterSuccess,
  } = useRegisterVerificationMutation();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOtp = () => {
    toast.success("OTP has been resent");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      return toast.error("Please enter 6 digit OTP");
    }
    await registerVerification({
      otp: enteredOtp,
    }).catch((error) => {
      toast.error(error.response.data.message);
    });
  };

  if (isRegisterSuccess) {
    toast.success("OTP verified successfully");
    return <Navigate to="/auth/onboard" />;
  }

  return (
    <div className="flex flex-col items-center justify-center card">
      <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
      <div className="flex space-x-2">
        {otp.map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={otp[index]}
            onChange={(event) => handleChange(index, event)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            className="input input-bordered w-12 h-12 text-center text-xl"
            maxLength="1"
          />
        ))}
      </div>
      <button
        className={`btn btn-primary w-full mt-4 ${
          isRegisterLoading && "disabled"
        }`}
        disabled={isRegisterLoading}
        onClick={handleSubmit}
      >
        {isRegisterLoading ? (
          <span className="loading loading-spinner">Verifying...</span>
        ) : (
          "Verify OTP"
        )}
      </button>
      <div>
        <div className="mt-2">
          <span>Didn't receive the OTP? </span>
          <button
            onClick={handleResendOtp}
            className="text-primar link y underline"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
