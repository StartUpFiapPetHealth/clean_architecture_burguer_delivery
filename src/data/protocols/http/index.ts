export interface HttpClient<ResponseType = any> {
    request: (data: HttpRequest) => Promise<HttpResponse<ResponseType>>;
  }
  
  export interface HttpRequest {
    url: string;
    method: HttpMethod;
    headers?: any;
    body?: any;
  }
  
  export interface HttpResponse<T = any> {
    statusCode: HttpStatusCode;
    body?: T;
  }
  
  export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
  }
  
  export enum HttpStatusCode {
    ok = 200,
    created = 201,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500,
  }
  