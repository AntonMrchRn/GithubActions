import {BaseQueryFn, createApi} from '@reduxjs/toolkit/query/react';

import {
  AxiosHeaderValue,
  AxiosProgressEvent,
  AxiosRequestConfig,
  GenericAbortSignal,
  Method,
} from 'axios';

import {axiosInstance} from '../../services/axiosInstance';

type AxiosQueryErrorResponse = {
  status: number;
  data: Error;
};
type BaseQuery = {
  url: string;
  method: Method;
  error?: AxiosQueryErrorResponse;
  data?: AxiosRequestConfig['data'];
  headers?: {[key: string]: AxiosHeaderValue};
  params?: AxiosRequestConfig['params'];
  onUploadProgress?: ((progressEvent: AxiosProgressEvent) => void) | undefined;
  signal?: GenericAbortSignal | undefined;
};

export const axiosBaseQuery = (): BaseQueryFn<
  BaseQuery,
  unknown,
  AxiosQueryErrorResponse
> => {
  return async ({
    url,
    params,
    method,
    data,
    headers,
    onUploadProgress,
    signal,
  }) => {
    try {
      const result = await axiosInstance({
        url: axiosInstance.defaults.baseURL + url,
        method,
        ...(params && {params}),
        ...(data && {data}),
        headers: {...axiosInstance.defaults.headers, ...headers},
        responseType: 'json',
        onUploadProgress,
        signal,
      });

      return {
        data: result.data,
      };
    } catch (error) {
      return error as AxiosQueryErrorResponse;
    }
  };
};

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
