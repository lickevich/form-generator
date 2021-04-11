export const configMock = `{
  "title": "Form Title",
  "items": [
    { "type": "text", "label": "textfield" },
    { "type": "number", "label": "numberfield" },
    { "type": "textarea", "label": "textarea" },
    { "type": "date", "label": "datefield" },
    {
      "type": "checkbox",
      "groupLabel": "checkbox",
      "items": [{ "label": "checkbox1" }, { "label": "checkbox2" }]
    },
    {
      "type": "radio",
      "groupLabel": "radio",
      "items": [
        { "label": "radio1", "name": "radio", "value": "1" },
        { "label": "radio2", "name": "radio", "value": "2" }
      ]
    }
  ],
  "buttons": [
    { "type": "submit", "value": "Apply" },
    { "type": "button", "value": "Ok" },
    { "type": "reset", "value": "Reset" }
  ]
}`;
