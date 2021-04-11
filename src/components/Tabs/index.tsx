import React, { Fragment } from "react";

import { ITabs } from "../../type";
import Tab from "../Tab";

const Tabs: React.FC<ITabs> = ({ routes }) => (
  <Fragment>
    {routes.map(({ id, path, name }) => (
      <Tab key={id} path={path} name={name} />
    ))}
  </Fragment>
);

export default Tabs;
