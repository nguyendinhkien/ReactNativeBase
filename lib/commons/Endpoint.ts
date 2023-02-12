export interface IEndpoint {
  method?: 'GET' | 'DELETE' | 'POST' | 'PUT';
  url: string;
}

export const ENDPOINT: {[name: string]: IEndpoint} = {
  LOGIN: {
    url: 'login',
  },
};

export class Endpoint {
  static getEndpoint(endpoint: IEndpoint, ...param: any[]) {
    let newUrl = endpoint.url;
    param.forEach((param, index) => {
      newUrl = newUrl.split(`{${index}}`).join(param.toString());
    });
    const newEndpoint: IEndpoint = {
      url: newUrl,
      method: endpoint.method,
    };
    return newEndpoint;
  }
}
