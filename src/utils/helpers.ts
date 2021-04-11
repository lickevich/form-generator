export const isObject = (value: any): boolean =>
  !!value && typeof value === "object" && !Array.isArray(value);

export const isString = (value: any): boolean => typeof value === "string";

export const isIncludedValue = (items: string[] = [], item: string): boolean =>
  items.indexOf(item) > -1;
