import { Leaf } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/ui/loading";
import { useRegister } from "@/apollo/hooks/user.hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  agreeTerms: boolean;
}

export const SignupPage: React.FC = () => {
  const { register, loading } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<SignupFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      agreeTerms: false,
    },
  });
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state?.user);

  if (isAuthenticated) {
    navigate("/");
  }
  const onSubmit = async (data: SignupFormValues) => {
    try {
      const response = await register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
      });
      if (response?.success) {
        toast({
          title: "Success",
          description: response.message || "Registration successful!",
          variant: "default",
        });
        // Optionally redirect to login page
        navigate("/login");
      } else {
        toast({
          title: "Error",
          description: response?.error_message || "Registration failed",
          variant: "destructive",
        });
      }
    } catch (err: Error | any) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-4 lg:p-6 rounded-sm">
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/"
            className="rounded-full border border-primary/40 overflow-hidden size-16 flex items-center justify-center"
          >
            <Leaf className="text-primary size-12" />
          </Link>

          <h2 className="mt-4 text-center text-xl font-bold text-color-primary">
            Create your FreshoBazar account
          </h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-6"
          >
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="firstName"
                rules={{
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-color-ternary">
                      First name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        {...field}
                        className="px-3 py-2.5 rounded-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                rules={{
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-color-ternary">
                      Last name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        {...field}
                        className="px-3 py-2.5 rounded-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-color-ternary">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email address"
                        {...field}
                        className="px-3 py-2.5 rounded-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                rules={{
                  required: "Please enter your phone number",
                  minLength: {
                    value: 11,
                    message: "Phone number must be 11 characters",
                  },
                  maxLength: {
                    value: 11,
                    message: "Phone number must be 11 characters",
                  },
                  pattern: {
                    value: /^(013|014|015|016|017|018|019)\d{8}$/,
                    message: "Invalid operator or phone number",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-color-ternary">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="01*********"
                        {...field}
                        className="px-3 py-2.5 rounded-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-color-ternary">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                          className="px-3 py-2.5 rounded-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute bottom-2 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                          {showPassword ? (
                            <svg
                              className="h-5 w-5 text-color-ternary"
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
                              className="h-5 w-5 text-color-ternary"
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="agreeTerms"
              rules={{
                required: "You must agree to the terms and conditions",
              }}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-900">
                      I agree to the{" "}
                      <Link
                        to="#"
                        className="font-medium text-primary hover:text-primary hover:underline"
                      >
                        Terms and Conditions
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-sm bg-primary hover:bg-primary/80"
            >
              {loading ? <LoadingSpinner size={20} color="white" /> : "Sign up"}
            </Button>
          </form>
        </Form>

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
