export default class AppError extends Error {
  status!: number;
  message!: string;
  constructor(status: number = 500, message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}
