export class APIError extends Error {
  public readonly name: string;
  public readonly httpCode: number;
  public readonly isOperational?: boolean;
  public readonly data?: Record<string, any>;

  constructor(
    name: string,
    httpCode: number,
    data?: Record<string, any>,
    isOperational?: boolean
  ) {
    super(name);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.data = data;
    Error.captureStackTrace(this);
  }
}
