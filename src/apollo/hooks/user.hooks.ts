import { useMutation, ApolloError, useQuery } from "@apollo/client";
import { LOGIN_USER, REGISTER_USER } from "../mutations/user.mutations";
import {
  RegisterVariables,
  RegisterResponse,
  LoginResponse,
  LoginVariables,
  GetUserResponse,
} from "../types/user.types";
import { GET_USER_BY_ID } from "../queries/user.queries";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/redux/slices/user.slice";
import { setError } from "@/redux/slices/favoriteProductSlice";
import { useGetCart } from "./cart.hooks";
import { useGetFavorites } from "./favorite.hooks";

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
      console.error("Registration error:", err);
      throw err instanceof ApolloError ? err : new Error("Registration failed");
    }
  };

  return {
    register: handleRegister,
    loading,
    error,
  } as const;
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
      if (data?.login?.token) {
        try {
          localStorage.setItem("token", data.login.token);
        } catch (storageError) {
          console.error("Failed to store token:", storageError);
          throw new Error("Failed to store authentication token");
        }
      } else {
        throw new Error("Token not found in response");
      }
      return data?.login || null;
    } catch (err) {
      console.error("Login error:", err);
      throw err instanceof ApolloError ? err : new Error("Login failed");
    }
  };

  return {
    login: handleLogin,
    loading,
    error,
  } as const;
};

export const useGetUser = () => {
  const dispatcher = useDispatch();
  useGetCart();
  useGetFavorites();

  const { loading, error, data, refetch } = useQuery<{
    getUser: GetUserResponse;
  }>(GET_USER_BY_ID, {
    skip: !localStorage.getItem("token"),
    fetchPolicy: "cache-and-network", // Ensures updated data from server
  });
  dispatcher(setLoading(loading));
  try {
    if (data?.getUser?.success) {
      dispatcher(setUser(data?.getUser?.user || null));
    }
    if (data?.getUser?.error) {
      throw new Error(
        data?.getUser?.error_message || "Failed to fetch user data"
      );
    }
  } catch (err: any) {
    dispatcher(setError(err?.message || "Failed to fetch user data"));
    console.error("Error dispatching user data:", err);
  }

  return {
    refetch,
    loading,
    error,
    data: data?.getUser,
  } as const;
};
