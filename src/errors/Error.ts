//eslint-disable-next-line no-unused-vars
import { CustomError } from 'ts-custom-error';

export class APIError extends CustomError {
  public constructor(
    public statusCode: number,
    message?: string,
    public level?: 'INFO' | 'WARNING' | 'ERROR'
  ) {
    super(message);
  }
}

export function handleLambdaError(error) {
  console.error('Error:', error);
  let defaultStatusCode = 500;
  if (error instanceof APIError) {
    defaultStatusCode = error.statusCode;
  }
  return {
    statusCode: defaultStatusCode,
    body: JSON.stringify({ message: 'An error occurred: ' + error })
  };
}
