export class QueryParams {
  getQueryParams(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
}
