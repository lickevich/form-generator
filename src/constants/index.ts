import { IRoutes } from "../type";

export const NUMBER_OF_REQUIRED_FIELDS: number = 3;

export const INVALID_FORMAT: string =
  "Invalid input format. The value must be in JSON format and contain the required fields 'title', 'items', 'buttons'. For input of type 'radio' and 'checkbox' there is a required field 'items'";

export const ROUTES: IRoutes = {
  CONFIG: {
    ID: "config",
    PATH: "/",
    NAME: "Config",
  },
  RESULT: {
    ID: "result",
    PATH: "/result",
    NAME: "Result",
  },
};
