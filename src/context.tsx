import React, { useState } from "react";

import defaultConfig from "./data";
import { ContextType } from "./type";
import { ROUTES } from "./constants";
import { isIncludedValue } from "./utils/helpers";

export const initialState = {
  template: {
    title: "",
    items: [],
    buttons: [],
  },
  setTemplate: () => {},
  error: "",
  setError: () => {},
  config: defaultConfig,
  setConfig: () => {},
  blockedRoutesIds: [ROUTES.RESULT.ID],
  setBlockedRoutesIds: () => {},
  isResultAvailable: false,
};

export const Context = React.createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
  const [template, setTemplate] = useState<ContextType["template"]>(
    initialState.template
  );
  const [error, setError] = useState<ContextType["error"]>(initialState.error);
  const [config, setConfig] = useState<ContextType["config"]>(
    initialState.config
  );
  const [blockedRoutesIds, setBlockedRoutesIds] = useState<
    ContextType["blockedRoutesIds"]
  >(initialState.blockedRoutesIds);
  const isResultAvailable: boolean = !isIncludedValue(
    blockedRoutesIds,
    ROUTES.RESULT.ID
  );

  return (
    <Context.Provider
      value={{
        template,
        setTemplate,
        error,
        setError,
        config,
        setConfig,
        blockedRoutesIds,
        setBlockedRoutesIds,
        isResultAvailable,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
