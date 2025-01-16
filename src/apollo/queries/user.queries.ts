import { gql } from "@apollo/client";

// Get user by ID
export const GET_USER_BY_ID = gql`
  query GetUser {
    getUser {
      success
      error_message
      error
      user {
        _id
        firstName
        lastName
        email
        phoneNumber
        role
        profileImage
        lastLogin
        failedLoginAttempts
        accountLocked
        rewardsPoints
        acceptedTerms
        acceptedPrivacyPolicy
        consentForDataProcessing
        isDelete
        createdAt
        updatedAt
        legalDocumentsInfo {
          photo
          fullName
          gender
          nationality
          dateOfBirth
          NIDNumber
          NIDPicture
          passportNumber
          passportPicture
          drivingLicenseNumber
          drivingLicensePicture
          birthCertificateNumber
          birthCertificatePicture
        }
        addresses {
          label
          street
          city
          state
          postalCode
          country
          isDefault
        }
        preferences {
          notificationPreferences {
            email
            sms
            pushNotifications
          }
          marketingOptIn
        }
        browsingHistory {
          productId
          viewedAt
        }
      }
    }
  }
`;

// Update user profile
export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($userId: ID!, $input: UpdateUserInput!) {
    updateUserProfile(userId: $userId, input: $input) {
      _id
      firstName
      lastName
      email
      phoneNumber
      profileImage
      updatedAt
    }
  }
`;

// Update user preferences
export const UPDATE_USER_PREFERENCES = gql`
  mutation UpdateUserPreferences(
    $userId: ID!
    $preferences: PreferencesInput!
  ) {
    updateUserPreferences(userId: $userId, preferences: $preferences) {
      _id
      preferences {
        notificationPreferences {
          email
          sms
          pushNotifications
        }
        marketingOptIn
      }
    }
  }
`;

// Add user address
export const ADD_USER_ADDRESS = gql`
  mutation AddUserAddress($userId: ID!, $address: AddressInput!) {
    addUserAddress(userId: $userId, address: $address) {
      _id
      addresses {
        label
        street
        city
        state
        postalCode
        country
        isDefault
      }
    }
  }
`;

// Update legal documents
export const UPDATE_LEGAL_DOCUMENTS = gql`
  mutation UpdateLegalDocuments(
    $userId: ID!
    $documents: LegalDocumentsInput!
  ) {
    updateLegalDocuments(userId: $userId, documents: $documents) {
      _id
      legalDocumentsInfo {
        photo
        fullName
        gender
        nationality
        dateOfBirth
        NIDNumber
        NIDPicture
        passportNumber
        passportPicture
        drivingLicenseNumber
        drivingLicensePicture
        birthCertificateNumber
        birthCertificatePicture
      }
    }
  }
`;

// Delete user account
export const DELETE_USER_ACCOUNT = gql`
  mutation DeleteUserAccount($userId: ID!) {
    deleteUserAccount(userId: $userId) {
      _id
      isDelete
      deletedAt
    }
  }
`;
