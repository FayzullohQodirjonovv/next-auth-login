"use client"
import { Github } from 'lucide-react'
import React from 'react'
import { signIn } from "next-auth/react"

const Login = () => {
  const signInWithGitHub = () => {
    signIn("github", {
      redirect: true,
      callbackUrl: "/dashboard"
    })
  }

  const signInWithGoogle = () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/dashboard"
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Seamless Login for Exclusive Access
          </h1>
          <p className="text-base mt-6 text-slate-600">
            Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.
          </p>
          <p className="text-sm mt-6 text-slate-600">
            Don't have an account?
            <a href="#" className="text-blue-600 font-medium hover:underline ml-1">Register here</a>
          </p>
        </div>

        <form className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center lg:text-left">
            Sign in
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter Email"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md bg-slate-100 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-1">Password</label>
              <input
                name="password"
                type="password"
                required
                placeholder="Enter Password"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md bg-slate-100 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-slate-900">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="w-full py-2.5 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none shadow"
            >
              Log in
            </button>
          </div>
          <div className="my-6 flex items-center gap-4">
            <hr className="w-full border-slate-300" />
            <p className="text-sm text-slate-900 text-center">or</p>
            <hr className="w-full border-slate-300" />
          </div>

          <div className="space-x-6 flex justify-center">

            <button onClick={signInWithGoogle} type="button" className="border-0 outline-0 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
                <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" />
                <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" />
                <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" />
                <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" />
                <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" />
                <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" />
              </svg>
            </button>
            <button type="button" className="border-0 outline-0 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
                <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" />
                <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" />
              </svg>
            </button>
        <button
  type="button"
  className="border-0 outline-0 cursor-pointer"
  onClick={signInWithGitHub}
>
  <Github />
</button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
