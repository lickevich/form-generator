import React from "react";

import { IInput } from "../../../type";
import Row from "../Row";
import Col from "../Col";

const FormInputGroup: React.FC<IInput> = ({
  type = "",
  groupLabel = "",
  items = [],
}) => {
  return (
    <Row>
      <Col>
        <label title={groupLabel}>{groupLabel}</label>
      </Col>
      <Col>
        {items.map(({ label = "", ...rest }, index) => {
          const id = `${label}${index}`;

          return (
            <div key={id}>
              <input id={id} type={type} {...rest} />
              <label htmlFor={id} title={label}>
                {label}
              </label>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default FormInputGroup;
