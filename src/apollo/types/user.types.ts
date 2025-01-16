// Define types based on GraphQL schema
interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  pushNotifications: boolean;
}

interface Preferences {
  notificationPreferences: NotificationPreferences;
  marketingOptIn: boolean;
}

interface Address {
  label?: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

interface LegalDocumentsInfo {
  photo: string;
  fullName: string;
  gender: string;
  nationality: string;
  dateOfBirth: string;
  NIDNumber?: string;
  NIDPicture?: string;
  passportNumber?: string;
  passportPicture?: string;
  drivingLicenseNumber?: string;
  drivingLicensePicture?: string;
  birthCertificateNumber?: string;
  birthCertificatePicture?: string;
}

interface BrowsingHistory {
  productId: string;
  viewedAt: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  role: string;
  profileImage?: string;
  lastLogin?: string;
  failedLoginAttempts: number;
  accountLocked: boolean;
  legalDocumentsInfo?: LegalDocumentsInfo;
  addresses?: Address[];
  preferences?: Preferences;
  lastActive?: string;
  referredBy?: User;
  rewardsPoints: number;
  recentSearches?: string[];
  browsingHistory?: BrowsingHistory[];
  acceptedTerms: boolean;
  acceptedPrivacyPolicy: boolean;
  consentForDataProcessing: boolean;
  isDelete: boolean;
  deletedAt?: string;
  createdAt: string;
  updatedAt: string;
}

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

export interface GetUserResponse {
  success: boolean;
  error?: boolean;
  error_message?: string;
  user?: User;
}
