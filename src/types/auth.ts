export type User = {
  id: string;
  name: string;
  token: string;
};

export type AuthContextType = {
  isRegistered: boolean;
  setRegistered: (val: boolean) => void;

  pendingOtpMethod: string | null;
  setPendingOtpMethod: (m: string | null) => void;

  user: User | null;
  setUser: (u: User | null) => void;
};
export interface AuthContextValue {
  user: User | null;
  setUser: (u: User | null) => void;
  logout: () => void;
}

export interface CheckOtpRequest {
  otp: string;
}

export interface CheckOtpRequest {
  otp: string;
}
export interface CheckOtpResponse {
  user: User;
}

export interface SendOtpRequest {
  method: 'email' | 'phone';
  value: string;
}
export interface SendOtpResponse {
  success: boolean;
  message?: string;
}

export interface ErrorResponse {
  message?: string;
}
