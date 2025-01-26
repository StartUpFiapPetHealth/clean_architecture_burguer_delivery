import axios, { AxiosResponse } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from '../../data/protocols/http';

export class AxiosHttpClient implements HttpClient {
  async request<T>(data: HttpRequest): Promise<HttpResponse<T>> {
    let axiosResponse: AxiosResponse<T>;

    try {
      axiosResponse = await axios.request<T>({
        url: data.url,
        method: data.method,
        headers: data.headers,
        data: data.body,
      });

    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};