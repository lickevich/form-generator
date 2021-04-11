import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../../context";
import { ContextType } from "../../type";
import { Textarea } from "./style";
import { isValidConfig } from "../../utils/validaters";
import { INVALID_FORMAT, ROUTES } from "../../constants";
import Button from "../../components/Form/Button";
import Row from "../../components/Form/Row";
import ButtonsGroup from "../../components/Form/ButtonsGroup";
import { isIncludedValue } from "../../utils/helpers";

const Config: React.FC<React.ReactNode> = () => {
  const {
    config,
    setConfig,
    setTemplate,
    setError,
    setBlockedRoutesIds,
  } = useContext(Context) as ContextType;
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setConfig(e.target.value);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (isValidConfig(config)) {
      setTemplate(JSON.parse(config));
      setError("");
      setBlockedRoutesIds((prev) =>
        prev.filter((route) => route !== ROUTES.RESULT.ID)
      );
      history.push(ROUTES.RESULT.PATH);
    } else {
      setError(INVALID_FORMAT);
      setBlockedRoutesIds((prev) =>
        isIncludedValue(prev, ROUTES.RESULT.ID)
          ? prev
          : [...prev, ROUTES.RESULT.ID]
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Textarea value={config} onChange={handleChange} />
      </Row>
      <ButtonsGroup>
        <Button id="" type="submit" value="Apply" />
      </ButtonsGroup>
    </form>
  );
};

export default Config;
