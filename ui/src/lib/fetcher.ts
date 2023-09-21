import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const fetcher = async (resource: string, config?: AxiosRequestConfig): Promise<any> => {
  try {
    const response: AxiosResponse = await axios({
      url: `${BASE_URL}${resource}`,
      ...config,
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
};
