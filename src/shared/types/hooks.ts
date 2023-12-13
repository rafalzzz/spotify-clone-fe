import { JSXElementConstructor, ReactElement } from 'react';

export type TUseDisplayErrorProps = {
  displayError: (description: string) => void;
  contextHolder: ReactElement<string, string | JSXElementConstructor<string>>;
};

export type TUseLocalStorage = {
  key: string;
  defaultValue: string;
};

export type TUseLocalStorageProps = {
  value: string;
  setValue: (value: string) => void;
};
