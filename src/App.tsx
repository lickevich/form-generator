import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Context } from "./context";
import { ContextType } from "./type";
import routes from "./routes";
import { Container, Main } from "./style";
import Tabs from "./components/Tabs";
import Notification from "./components/Notification";
import Config from "./containers/Config";
import Result from "./containers/Result";
import { ROUTES } from "./constants";

const App: React.FC = () => {
  const { error, isResultAvailable } = useContext(Context) as ContextType;

  return (
    <Container>
      <Notification message={error} />
      <Tabs routes={routes} />
      <Main>
        <Switch>
          <Route exact path={ROUTES.CONFIG.PATH}>
            <Config />
          </Route>
          <Route exact path={ROUTES.RESULT.PATH}>
            {isResultAvailable ? (
              <Result />
            ) : (
              <Redirect to={ROUTES.CONFIG.PATH} />
            )}
          </Route>
        </Switch>
      </Main>
    </Container>
  );
};

export default App;
