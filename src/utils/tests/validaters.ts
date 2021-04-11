import {
  isValidTemplateFields,
  isValidTemplateButtons,
  isValidInputCheckboxItems,
  isValidInputRadioItems,
  isValidInputItem,
  isValidTemplateItems,
  isValidConfig,
} from "../validaters";
import { configMock } from "./mock";

describe("isValidTemplateFields", () => {
  let template: any;

  beforeEach(() => {
    template = { title: "title", items: [], buttons: [] };
  });

  it("should return true if required fields exist", () => {
    expect(isValidTemplateFields(template)).toEqual(true);
  });

  it("should return false if required fields not exist", () => {
    delete template.title;
    expect(isValidTemplateFields(template)).toEqual(false);
  });

  it("should return true if there are extra fields", () => {
    template.extraField = "Field";
    expect(isValidTemplateFields(template)).toEqual(false);
  });
});

describe("isValidTemplateButtons", () => {
  let buttons: any;

  beforeEach(() => {
    buttons = [
      { type: "submit", value: "Apply" },
      { type: "button", value: "Ok" },
      { type: "reset", value: "Reset" },
    ];
  });

  it("should return true if buttons have valid fields", () => {
    expect(isValidTemplateButtons(buttons)).toEqual(true);
  });

  it("should return false if buttons have not valid fields", () => {
    buttons.push({ type: "delete", value: "Delete" });
    expect(isValidTemplateButtons(buttons)).toEqual(false);
  });

  it("should return false if buttons are not exist", () => {
    expect(isValidTemplateButtons([])).toEqual(false);
  });
});

describe("isValidInputCheckboxItems", () => {
  let items: any;

  beforeEach(() => {
    items = [{ label: "checkbox1" }, { label: "checkbox2" }];
  });

  it("should return true if items have valid fields", () => {
    expect(isValidInputCheckboxItems(items)).toEqual(true);
  });

  it("should return false if items have not valid fields", () => {
    items.push({ rowLabel: "checkbox3" });
    expect(isValidInputCheckboxItems(items)).toEqual(false);
  });

  it("should return false if items are not exist", () => {
    expect(isValidInputCheckboxItems([])).toEqual(false);
  });
});

describe("isValidInputRadioItems", () => {
  let items: any;

  beforeEach(() => {
    items = [
      { label: "radio1", name: "radio", value: "1" },
      { label: "radio2", name: "radio", value: "2" },
    ];
  });

  it("should return true if items have valid fields", () => {
    expect(isValidInputRadioItems(items)).toEqual(true);
  });

  it("should return false if items have not valid fields", () => {
    items.push({ rowLabel: "radio3" });
    expect(isValidInputRadioItems(items)).toEqual(false);
  });

  it("should return false if items are not exist", () => {
    expect(isValidInputRadioItems([])).toEqual(false);
  });
});

describe("isValidInputItem", () => {
  let items: any;

  beforeEach(() => {
    items = [
      { type: "text", label: "textfield" },
      { type: "number", label: "numberfield" },
      { type: "textarea", label: "textarea" },
      { type: "date", label: "datefield" },
      {
        type: "checkbox",
        groupLabel: "checkbox",
        items: [{ label: "checkbox1" }, { label: "checkbox2" }],
      },
      {
        type: "radio",
        groupLabel: "radio",
        items: [
          { label: "radio1", name: "radio", value: "1" },
          { label: "radio2", name: "radio", value: "2" },
        ],
      },
    ];
  });

  it("should return true if items have valid fields", () => {
    expect(isValidInputItem(items[0])).toEqual(true);
    expect(isValidInputItem(items[1])).toEqual(true);
    expect(isValidInputItem(items[2])).toEqual(true);
    expect(isValidInputItem(items[3])).toEqual(true);
    expect(isValidInputItem(items[4])).toEqual(true);
    expect(isValidInputItem(items[5])).toEqual(true);
  });

  it("should return false if items have not valid fields", () => {
    delete items[0].label;
    delete items[1].label;
    delete items[2].label;
    delete items[3].label;
    delete items[4].groupLabel;
    delete items[5].groupLabel;

    expect(isValidInputItem(items[0])).toEqual(false);
    expect(isValidInputItem(items[1])).toEqual(false);
    expect(isValidInputItem(items[2])).toEqual(false);
    expect(isValidInputItem(items[3])).toEqual(false);
    expect(isValidInputItem(items[4])).toEqual(false);
    expect(isValidInputItem(items[5])).toEqual(false);
  });

  it("should return false if item group have not valid fields", () => {
    delete items[4].items.slice()[0].label;
    delete items[5].items.slice()[0].label;

    expect(isValidInputItem(items[4])).toEqual(false);
    expect(isValidInputItem(items[5])).toEqual(false);
  });
});

describe("isValidTemplateItems", () => {
  let items: any;

  beforeEach(() => {
    items = [
      { type: "text", label: "textfield" },
      { type: "number", label: "numberfield" },
      { type: "textarea", label: "textarea" },
      { type: "date", label: "datefield" },
      {
        type: "checkbox",
        groupLabel: "checkbox",
        items: [{ label: "checkbox1" }, { label: "checkbox2" }],
      },
      {
        type: "radio",
        groupLabel: "radio",
        items: [
          { label: "radio1", name: "radio", value: "1" },
          { label: "radio2", name: "radio", value: "2" },
        ],
      },
    ];
  });

  it("should return true if all of items have valid fields", () => {
    expect(isValidTemplateItems(items)).toEqual(true);
  });

  it("should return false if one of items have not valid fields", () => {
    items[0].type = "qwerty";

    expect(isValidTemplateItems(items)).toEqual(false);
  });
});

describe("isValidConfig", () => {
  it("should return true if all required fields are valid", () => {
    expect(isValidConfig(configMock)).toEqual(true);
  });

  it("should return false if required fields are not valid", () => {
    expect(
      isValidConfig(`{
      "title": "Form Title",
      "buttons": [
        { "type": "submit", "value": "Apply" }
      ]
    }`)
    ).toEqual(false);
  });

  it("should return false if config is not exist", () => {
    expect(isValidConfig(undefined)).toEqual(false);
  });
});
