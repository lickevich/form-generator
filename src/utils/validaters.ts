import { ITemplate, IInputCheckbox, IInputRadio } from "../type";
import { isString, isObject, isIncludedValue } from "./helpers";
import { NUMBER_OF_REQUIRED_FIELDS } from "../constants";
import {
  buttonTypes,
  inputTypes,
  isCheckboxType,
  isRadioType,
  isTextareaType,
} from "../models";

export const isValidTemplateFields = (template: ITemplate): boolean =>
  Object.keys(template).length === NUMBER_OF_REQUIRED_FIELDS &&
  isString(template.title) &&
  Array.isArray(template.items) &&
  Array.isArray(template.buttons);

export const isValidTemplateButtons = (
  buttons: ITemplate["buttons"]
): boolean => {
  if (buttons.length === 0) return false;

  return buttons.every(
    (button) =>
      isIncludedValue(buttonTypes, button.type) && isString(button.value)
  );
};

export const isValidInputCheckboxItems = (
  items: IInputCheckbox[] = []
): boolean => {
  if (items.length === 0) return false;

  return items.every((item) => isString(item.label));
};

export const isValidInputRadioItems = (items: IInputRadio[] = []): boolean => {
  if (items.length === 0) return false;

  return items.every(
    (item) =>
      isString(item.label) && isString(item.name) && isString(item.value)
  );
};

export const isValidInputItem = (item: any): boolean => {
  const isValidInputType = isIncludedValue(inputTypes, item.type);
  const isValidLabel = isString(item.label);
  const isValidGroupLabel = isString(item.groupLabel);

  if (isValidLabel && (isValidInputType || isTextareaType(item.type))) {
    return true;
  }
  if (isValidGroupLabel && isCheckboxType(item.type)) {
    return isValidInputCheckboxItems(item.items);
  }
  if (isValidGroupLabel && isRadioType(item.type)) {
    return isValidInputRadioItems(item.items);
  }

  return false;
};

export const isValidTemplateItems = (items: ITemplate["items"]): boolean => {
  if (items.length === 0) return false;

  return items.every((item) => isValidInputItem(item));
};

export const isValidConfig = (value: string = ""): boolean => {
  try {
    const template = JSON.parse(value);

    return (
      isObject(template) &&
      isValidTemplateFields(template) &&
      isValidTemplateItems(template.items) &&
      isValidTemplateButtons(template.buttons)
    );
  } catch {
    return false;
  }
};
