import React from "react";

export interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: string;
  label?: string;
  groupLabel?: string;
  items?: IInputRadio[] | IInputCheckbox[];
  index?: string;
}

export interface IInputCheckbox
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface IInputRadio
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface IButton extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export interface ITemplate extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
  items: Array<IInput>;
  buttons: IButton[];
}

export interface IRoutes {
  CONFIG: {
    ID: string;
    PATH: string;
    NAME: string;
  };
  RESULT: {
    ID: string;
    PATH: string;
    NAME: string;
  };
}

export interface IRoute {
  id: string;
  path: string;
  name: string;
}

export interface ITabs {
  routes: IRoute[];
}

export interface ITab {
  path: string;
  name: string;
}

export interface INotification {
  message: string;
}

export type ContextType = {
  template: ITemplate;
  setTemplate: React.Dispatch<React.SetStateAction<ITemplate>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  config: string;
  setConfig: React.Dispatch<React.SetStateAction<string>>;
  blockedRoutesIds: string[];
  setBlockedRoutesIds: React.Dispatch<React.SetStateAction<string[]>>;
  isResultAvailable: boolean;
};
