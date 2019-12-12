# Button Component

A simple button component that can be integrated into existing project.

## Usage

### To install the component

Import `src/components/CustomButton/CustomButton.js` in your project so it will be accessible as a component.

### Within your page

1. Add `<CustomButton />` to your `render()` function.
2. Specify props (see details below)

```
<CustomButton
    buttonValue="Button"
    buttonSize="M"
    buttonRole="primary"
    buttonState="hover"
    nonStyled={false}
    isCustom={false}
    customStyle={customStyle}
    iconUrl="http://some.long/path/to/your-favourite/icon.png"
/>
```

### Props

`buttonValue` - the initial value of the button.
Accepted data type - _string_.

`buttonSize` - button size. There are three options: **S**, **M**, **L**. Will be set to **M** if not specified.
Accepted data type - _string_.

`buttonRole` - button role in the document. There are five options: **primary**, **secondary**, **success**, **warning**, **error**. Will be set to **primary** if not specified.
Accepted data type - _string_.

`buttonState` - forced state setting for the button. There are four options: **hover**, **active**, **disabled**, **loading**.
Accepted data type - _string_.

`nonStyled` - if set to **true** button will be rendered as text-only.
Accepted data type - _boolean_.

`isCustom` - if set to **true** button will accept style from `customStyle` prop.
Accepted data type - _boolean_.

`customStyle` - object with style properties for the button. Only applicable if `isCustom` is set to **true**.
Accepted data type - _object_.

`iconUrl` - link to the icon that will be added to the button body. Only applicable if `isCustom` is set to **true**.
Accepted data type - _string_.

## Made with

- React
- Sass
- Flow
