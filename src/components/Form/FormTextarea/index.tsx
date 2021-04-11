import React from "react";

import { IInput } from "../../../type";
import Row from "../Row";
import Col from "../Col";

const FormTextarea: React.FC<IInput> = ({
  index = "",
  label = "",
  ...rest
}) => {
  const id = `${label}${index}`;

  return (
    <Row>
      <Col>
        <label htmlFor={id} title={label}>
          {label}
        </label>
      </Col>
      <Col>
        <textarea id={id} {...rest} />
      </Col>
    </Row>
  );
};

export default FormTextarea;
