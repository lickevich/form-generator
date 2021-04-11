import React, { useContext } from "react";

import { Context } from "../../context";
import { ContextType } from "../../type";
import Form from "../../components/Form";

const Result: React.FC<React.ReactNode> = () => {
  const { template } = useContext(Context) as ContextType;

  return <Form {...template} />;
};

export default Result;
