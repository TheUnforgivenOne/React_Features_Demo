import { QueryType } from '../types/types';

class JSONService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com';
  private todosEndpoint: string = '/todos';

  private static queryToString (query: QueryType) {
    const keyValuePairs: string[] = [];

    Object.entries(query).forEach(([key, value]) => {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    });

    return keyValuePairs.join('&');
  }

  private static getRequest (url: string, query: QueryType) {
    const queryStr: string = Object.keys(query).length ? '?' + this.queryToString(query) : '';

    return fetch(url + queryStr).then((response) => response.json());
  }

  getTodos (query: { _start: number; _limit: number }) {
    const requestUrl: string = this.baseUrl + this.todosEndpoint;

    return JSONService.getRequest(requestUrl, query);
  }
}

export default new JSONService();
