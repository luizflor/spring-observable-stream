export class Constants {
  static baseUrl: string = window.location.origin === 'http://localhost:4200'
    ? 'http://localhost:8081'
    : window.location.origin;
}
