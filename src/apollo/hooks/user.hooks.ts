import { useMutation, ApolloError } from "@apollo/client";
import { LOGIN_USER, REGISTER_USER } from "../mutations/user.mutations";
import {
  RegisterVariables,
  RegisterResponse,
  LoginResponse,
  LoginVariables,
} from "../types/user.types";
export const useRegister = () => {
  const [registerMutation, { loading, error }] = useMutation<
    { register: RegisterResponse },
    { input: RegisterVariables }
  >(REGISTER_USER);

  const handleRegister = async (
    userData: RegisterVariables
  ): Promise<RegisterResponse | null> => {
    try {
      const { data } = await registerMutation({
        variables: {
          input: userData,
        },
      });
      return data?.register || null;
    } catch (err) {
      // Log error for debugging (optional)
      console.error("Registration error:", err);

      // Re-throw as ApolloError if it's already one, or wrap in Error
      throw err instanceof ApolloError ? err : new Error("Registration failed");
    }
  };

  return {
    register: handleRegister,
    loading,
    error,
  } as const; // Use const assertion for better type inference
};

export const useLogin = () => {
  const [loginMutation, { loading, error }] = useMutation<
    { login: LoginResponse & { token?: string } },
    { input: LoginVariables }
  >(LOGIN_USER);

  const handleLogin = async (
    input: LoginVariables
  ): Promise<LoginResponse | null> => {
    try {
      const { data } = await loginMutation({
        variables: {
          input,
        },
      });
      if (data?.login?.token) localStorage.setItem("token", data.login.token);
      else throw new Error("Token not found in response");
      return data?.login || null;
    } catch (err) {
      // Log error for debugging (optional)
      console.error("Login error:", err);

      // Re-throw as ApolloError if it's already one, or wrap in Error
      throw err instanceof ApolloError ? err : new Error("Login failed");
    }
  };

  return {
    login: handleLogin,
    loading,
    error,
  } as const; // Use const assertion for better type inference
};
