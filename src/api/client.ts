import axios, { AxiosError } from 'axios';

import type { ErrorResponse } from 'types/auth';

export const api = axios.create({
  baseURL: '/',
  headers: { 'Content-Type': 'application/json' },
});

export const getErrorMessage = (err: unknown): string => {
  const axiosErr = err as AxiosError<ErrorResponse>;
  return (
    axiosErr?.response?.data?.message || axiosErr?.message || 'Unexpected error, please try again.'
  );
};
