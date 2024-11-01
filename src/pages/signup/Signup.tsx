import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

export const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  });

  const password = watch("password");

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    console.log("Signup form submitted:", data);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-4 lg:p-6 rounded-sm">
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/"
            className="rounded-full border border-primary/40 overflow-hidden size-16"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElElEQVR4nO1aXYgcRRBuna65O6MBH6PGJzEi0QejD6JPKqIg+qDng3+HAXerZrP+JIiPiz8IskZYbro2i5IDjUIORXxRHwTx71FEjYRoBIkSIQZNotxp8G6lZnrv5u5ytzv7M7OzzgcNy8x2V/XXVTVd1a1UGmgULgDGKjD+CowngHGvPFP/B7iNwlWa8RtgakabNnQYpkvXqFEGME4B4192wt/BdOk6va9wvWY8FBIh73BKjRxmpsbBUC2y2q+r6p5NHb/PMtx68epgtVeZ/HLDz9azEOmrsgyITGjdZujTNYRl3iVmejTpLLuEG43yhuaBqdDtWGDokYhLDP9XAiIKD6bhXC+EDg4zK0120G2oXMJdsbEZ7AoNnUtACgolSfj6aBRAM+5PyuTbugTjftFJJQVgfCXtSa9phl5OkoCTAfP14k0qZYgO1h1OJCYUDP0mQh2m21TKEB2SJ4Bxb7omH+YPwPhF5Fk1MQJUowDic2ExIxV/D/IHIcIWVKqqUtHJEZCjPULzXE510x4ncYA112EZJ3FATgDlFgC5C1AeA9SQxJLEAXkMwL+DlXtt50Vds1grb7Y7v1Mqa9CMP4nyvdT2gXG7zfe/VlmDNvR2oLyhJ7oew/eesgS8obIGMPSQJeBbNTvpxB5gdtJpnSg5jHeqzKFWHtOMP9sVLMXtrhkfD/vSj5nN9KBevN8GsX8c37s1VpHD0FkwtOgw3qKyDDDkt0jQ9eKuDd1BzF5WXiYfFjleVJlHpXL+EgmhOxwKgxtuV753oTT5rQ3tXnmKjM+qUYLLNKkZj3Va9VEjiVp5DBgf0IYOakNHg8NTQ/PyWzO+tRQzRpEA6LCyM8IEUEcTGx0CZicdYNohO8HWrjAOAdJH+soYXW2k0oLre/eBoQ/B0Jlz1PM/atdf/nOOMvgZGdNlvFcNDZgudhjvAsaXwNDHwLhTHmvGI5FP3g+acQYMPepOl67sdGj5r/SRvtrQ9xGrOGxlPAmMn4hs0UF0UUnBMXS7DWgL0VXShg7Ie2B82K72nPa9m3uVpw15siMUeS7j3cEzxndXWdYCGPp84Ed12tDuiFnO21V4wfG9O6LH09rQq/Z/v2tDN3QlrKnO00zPBJM3tChELL2rlcdEJhh63uowZ3Va7CX73BB6X+FGK+RfIUKU2PD+gKH3IkTFu+pWK29eDpy40DaZChOvp60lLHZN+kZoTUgzVlQnCEk4EHGRN8cNbW3XzfW9eyQDtJP/U4JqjLzjOavjO6rfgOBmNzUnpkuXxOknCZC9LifWcFYzzUK9+OCY710R3BCv7tkEhq6VwCaVn0gA/dJl3BZH1kS9eKmVc1z1G9DDBmW8UbhcqjqrA+c6J7/Hwfce6/bbP7CNFPRj4EZhi/izfNO1oV8gKJziH5rxKyEo+KT1eNdnuAlIADkBnFtAM3cBzmNAMzvBpc/IYwDnMaCZxwDOY0Cz37FF5UHQhDW+iVr5MjWkkHR7YBcqdKsMZej9YSQhnDx+YGsPB/suwGXcJiWuWJeaU2l4cmALNG5oa1DQYDyd/kTXTPy0rHzcyf8HX8iXA/k0/W0AAAAASUVORK5CYII="
              className="pt-0.5"
            />
          </Link>

          <h2 className="mt-4 text-center text-xl font-bold text-color-primary">
            Create your Krishok Bolchi account
          </h2>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="first-name"
                className=" text-sm text-color-ternary"
              >
                First name
              </label>
              <input
                id="first-name"
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
                className="appearance-none rounded-sm relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary   sm:text-sm"
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="last-name"
                className=" text-sm text-color-ternary"
              >
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
                className="appearance-none rounded-sm relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary   sm:text-sm"
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email-address"
                className=" text-sm text-color-ternary"
              >
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="appearance-none rounded-sm relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary   sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* password */}
            <div className="">
              <div className="relative">
                <label
                  htmlFor="password"
                  className=" text-sm text-color-ternary"
                >
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="appearance-none rounded-sm relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-3 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477  0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
              <div className="relative mt-3">
                <label
                  htmlFor="confirm-password"
                  className=" text-sm text-color-ternary"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                  className="appearance-none rounded-sm relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary   sm:text-sm"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute bottom-3 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showConfirmPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="">
            <div className="flex items-center">
              <input
                id="agree-terms"
                type="checkbox"
                {...register("agreeTerms", {
                  required: "You must agree to the terms and conditions",
                })}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="agree-terms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the{" "}
                <Link
                  to="#"
                  className="font-medium text-primary hover:text-primary hover:underline"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="mt-1 text-sm text-red-600">
                {errors.agreeTerms.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-primary hover:primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-1 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline text-sm"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
