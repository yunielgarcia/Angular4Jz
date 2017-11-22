export class Constants {

  public static get API_IP(): string {
    return '54.82.218.165:80/';
  }

  public static get API_URL(): string {
    return '//' + this.API_IP + 'api/v1';
  }
}
