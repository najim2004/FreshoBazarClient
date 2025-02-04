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
import { useLogin } from "@/apollo/hooks/user.hooks";
import LoadingSpinner from "@/components/ui/loading";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, loading } = useLogin();
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      });
      if (response?.success) {
        // Store token if needed
        console.log(response);

        toast({
          title: "Success",
          description: response?.message,
        });

        navigate("/");
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: response?.error_message || "Login failed",
        });
      }
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An error occurred during login",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-4 lg:p-6 rounded-sm">
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/"
            className="rounded-full border border-primary/40 overflow-hidden size-16 flex items-center justify-center"
          >
            <Leaf className="text-primary size-12" />
          </Link>

          <h2 className="mt-4 text-center text-xl font-bold text-color-primary">
            Login in to your FreshoBazar account
          </h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-6"
          >
            <div className="space-y-4">
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
                    <FormLabel className="text-color-ternary text-sm">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email address"
                        type="email"
                        autoComplete="email"
                        className="rounded-sm px-3 py-2.5 border border-gray-300 placeholder-colortertext-color-ternary text-color-primary focus:ring-primary focus:border-primary"
                        {...field}
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
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-color-ternary text-sm">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          placeholder="Password"
                          className="rounded-sm px-3 py-2.5 border border-gray-300 placeholder-colortertext-color-ternary text-color-primary focus:ring-primary focus:border-primary"
                          {...field}
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

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <div className="flex items-center">
                    <Checkbox
                      id="remember-me"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-color-primary"
                    >
                      Remember me
                    </label>
                  </div>
                )}
              />

              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-primary hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <Button
              disabled={loading}
              type="submit"
              className="w-full py-2 px-4 text-sm font-medium rounded-sm text-white bg-primary hover:bg-primary/80 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {loading ? <LoadingSpinner size={20} color="white" /> : "Login"}
            </Button>
          </form>
        </Form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
