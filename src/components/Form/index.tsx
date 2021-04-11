import React, { Fragment } from "react";

import { ITemplate } from "../../type";
import { Title, StyledForm } from "./style";
import {
  inputTypes,
  isCheckboxType,
  isRadioType,
  isTextareaType,
} from "../../models";
import { isIncludedValue } from "../../utils/helpers";
import FormInput from "../Form/FormInput";
import FormTextarea from "../Form/FormTextarea";
import FormInputGroup from "../Form/FormInputGroup";
import ButtonsGroup from "./ButtonsGroup";
import Button from "./Button";
import Row from "./Row";

const Form: React.FC<ITemplate> = ({ title, items, buttons, ...rest }) => {
  return (
    <Fragment>
      <Row>
        <Title>{title}</Title>
      </Row>
      <StyledForm {...rest}>
        {items.map(
          ({ type = "", label = "", groupLabel = "", ...rest }, index) => {
            const isInputTypes: boolean = isIncludedValue(inputTypes, type);
            const id: string = `${label}${index}`;

            if (isInputTypes) {
              return <FormInput key={id} type={type} label={label} {...rest} />;
            }
            if (isTextareaType(type)) {
              return (
                <FormTextarea key={id} type={type} label={label} {...rest} />
              );
            }
            if (isCheckboxType(type) || isRadioType(type)) {
              return (
                <FormInputGroup
                  key={id}
                  type={type}
                  groupLabel={groupLabel}
                  {...rest}
                />
              );
            }

            return null;
          }
        )}
      </StyledForm>
      <ButtonsGroup>
        {buttons.map((button, index) => {
          const id: string = `${button.value}${index}`;
          return <Button key={id} {...button} />;
        })}
      </ButtonsGroup>
    </Fragment>
  );
};

export default Form;
