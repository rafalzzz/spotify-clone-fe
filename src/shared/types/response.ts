type TRequestBodyError = { errorMessage: string };

export type TServerResponse = string | TRequestBodyError[] | undefined;
