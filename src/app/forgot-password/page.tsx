"use client";
import ForgotPasswordForm from "@/components/ForgotPassword/ForgotPasswordForm/ForgotPasswordForm";
import ResetPassword from "@/components/ForgotPassword/ResetPassword/ResetPassword";
import ResetPasswordForm from "@/components/ForgotPassword/ResetPasswordForm/ResetPasswordForm";
import VerifyCodeForm from "@/components/ForgotPassword/VerifyCodeForm/VerifyCodeForm";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="container mx-auto py-16! px-4!">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <ResetPassword />
        <div className="w-full">
          {step === 4 ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
              </div>
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <svg
                    data-prefix="fas"
                    data-icon="check"
                    className="w-[37.5px] h-7.5 text-green-600"
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Password Reset!
                  </h2>
                  <p className="text-gray-600 font-medium">
                    Your password has been successfully reset. You can now sign
                    in with your new password.
                  </p>
                </div>
                <Link href="/login" className="inline-block w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl">
                  Back to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {step === 1
                    ? "Forgot Password?"
                    : step === 2
                      ? "Check Your Email"
                      : "Create New Password"}
                </h1>
                <p className="text-gray-600 font-medium">
                  {step === 1
                    ? "No worries, we'll send you a reset code"
                    : step === 2
                      ? `Enter the 6-digit code sent to ${userEmail}`
                      : "Your new password must be different from previous passwords"}
                </p>
              </div>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white ${step === 1 ? "ring-4 ring-primary-100" : ""}`}
                  >
                    {step === 1 ? (
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.625 1.5C2.00391 1.5 1.5 2.00391 1.5 2.625C1.5 2.97891 1.66641 3.31172 1.95 3.525L6.825 7.18125C7.22578 7.48125 7.77422 7.48125 8.175 7.18125L13.05 3.525C13.3336 3.31172 13.5 2.97891 13.5 2.625C13.5 2.00391 12.9961 1.5 12.375 1.5H2.625ZM1.5 4.59375V9C1.5 9.82734 2.17266 10.5 3 10.5H12C12.8273 10.5 13.5 9.82734 13.5 9V4.59375L8.85 8.08125C8.05078 8.68125 6.94922 8.68125 6.15 8.08125L1.5 4.59375Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5134 1.91682C14.9044 2.20119 14.9919 2.74807 14.7075 3.13908L7.70752 12.7641C7.55713 12.9719 7.32471 13.1004 7.06768 13.1223C6.81064 13.1442 6.56182 13.0485 6.38135 12.868L2.88135 9.36799C2.53955 9.02619 2.53955 8.47111 2.88135 8.12932C3.22314 7.78752 3.77822 7.78752 4.12002 8.12932L6.89541 10.9047L13.2938 2.10822C13.5782 1.71721 14.1251 1.62971 14.5161 1.91408L14.5134 1.91682Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </div>
                  <div
                    className={`w-16 h-0.5 mx-2 transition-all duration-300 ${step === 1 ? "bg-gray-200" : "bg-primary-600"}`}
                  ></div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step === 1 ? "bg-gray-100 text-gray-400" : step === 2 ? "bg-primary-600 text-white ring-4 ring-primary-100" : "bg-primary-600 text-white"}`}
                  >
                    {step === 1 ? (
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.375 8.25C11.6531 8.25 13.5 6.40312 13.5 4.125C13.5 1.84688 11.6531 0 9.375 0C7.09688 0 5.25 1.84688 5.25 4.125C5.25 4.56328 5.31797 4.9875 5.44453 5.38359L1.66406 9.16406C1.55859 9.26953 1.5 9.4125 1.5 9.5625V11.4375C1.5 11.7492 1.75078 12 2.0625 12H3.9375C4.24922 12 4.5 11.7492 4.5 11.4375V10.5H5.4375C5.74922 10.5 6 10.2492 6 9.9375V9H6.9375C7.0875 9 7.23047 8.94141 7.33594 8.83594L8.11641 8.05547C8.5125 8.18203 8.93672 8.25 9.375 8.25ZM10.3125 2.25C10.5611 2.25 10.7996 2.34877 10.9754 2.52459C11.1512 2.7004 11.25 2.93886 11.25 3.1875C11.25 3.43614 11.1512 3.6746 10.9754 3.85041C10.7996 4.02623 10.5611 4.125 10.3125 4.125C10.0639 4.125 9.8254 4.02623 9.64959 3.85041C9.47377 3.6746 9.375 3.43614 9.375 3.1875C9.375 2.93886 9.47377 2.7004 9.64959 2.52459C9.8254 2.34877 10.0639 2.25 10.3125 2.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : step === 2 ? (
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.375 8.25C11.6531 8.25 13.5 6.40312 13.5 4.125C13.5 1.84688 11.6531 0 9.375 0C7.09688 0 5.25 1.84688 5.25 4.125C5.25 4.56328 5.31797 4.9875 5.44453 5.38359L1.66406 9.16406C1.55859 9.26953 1.5 9.4125 1.5 9.5625V11.4375C1.5 11.7492 1.75078 12 2.0625 12H3.9375C4.24922 12 4.5 11.7492 4.5 11.4375V10.5H5.4375C5.74922 10.5 6 10.2492 6 9.9375V9H6.9375C7.0875 9 7.23047 8.94141 7.33594 8.83594L8.11641 8.05547C8.5125 8.18203 8.93672 8.25 9.375 8.25ZM10.3125 2.25C10.5611 2.25 10.7996 2.34877 10.9754 2.52459C11.1512 2.7004 11.25 2.93886 11.25 3.1875C11.25 3.43614 11.1512 3.6746 10.9754 3.85041C10.7996 4.02623 10.5611 4.125 10.3125 4.125C10.0639 4.125 9.8254 4.02623 9.64959 3.85041C9.47377 3.6746 9.375 3.43614 9.375 3.1875C9.375 2.93886 9.47377 2.7004 9.64959 2.52459C9.8254 2.34877 10.0639 2.25 10.3125 2.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5134 1.91682C14.9044 2.20119 14.9919 2.74807 14.7075 3.13908L7.70752 12.7641C7.55713 12.9719 7.32471 13.1004 7.06768 13.1223C6.81064 13.1442 6.56182 13.0485 6.38135 12.868L2.88135 9.36799C2.53955 9.02619 2.53955 8.47111 2.88135 8.12932C3.22314 7.78752 3.77822 7.78752 4.12002 8.12932L6.89541 10.9047L13.2938 2.10822C13.5782 1.71721 14.1251 1.62971 14.5161 1.91408L14.5134 1.91682Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </div>
                  <div
                    className={`w-16 h-0.5 mx-2 transition-all duration-300 ${step === 3 ? "bg-primary-600" : "bg-gray-200"}`}
                  ></div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step === 3 ? "bg-primary-600 text-white ring-4 ring-primary-100" : "bg-gray-100 text-gray-400"}`}
                  >
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 3V4.5H9V3C9 2.17266 8.32734 1.5 7.5 1.5C6.67266 1.5 6 2.17266 6 3ZM4.5 4.5V3C4.5 1.34297 5.84297 0 7.5 0C9.15703 0 10.5 1.34297 10.5 3V4.5C11.3273 4.5 12 5.17266 12 6V11.25C12 12.0773 11.3273 12.75 10.5 12.75H4.5C3.67266 12.75 3 12.0773 3 11.25V6C3 5.17266 3.67266 4.5 4.5 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {step === 1 ? (
                <ForgotPasswordForm
                  setStep={setStep}
                  setUserEmail={setUserEmail}
                />
              ) : 
              step === 2 ? (
                <VerifyCodeForm
                  setStep={setStep}
                  setUserEmail={setUserEmail}
                  userEmail={userEmail}
                />
              ) : (
                <ResetPasswordForm setStep={setStep} userEmail={userEmail} />
              )}
              <div
                className={`${step === 3 ? "hidden" : ""} text-center mt-8 pt-6 border-t border-gray-100`}
              >
                <p className="text-gray-600 font-medium">
                  Remember your password?{" "}
                  <Link
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    href="/login"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}