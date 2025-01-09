interface BaseResponse {
  success: boolean;
  message: string;
  error?: boolean;
  error_message?: string;
}

export interface RegisterVariables {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export type RegisterResponse = BaseResponse;

export type LoginResponse = BaseResponse & {
  token?: string;
};

export interface LoginVariables {
  email: string;
  password: string;
}
