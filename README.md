# React Avery
This library makes it easy to create labels which can be printed on-to a 10 label avery sheet.

## Name tag story screenshots
### Print preview
![Name tag print preview](https://i.imgur.com/lscW3vL.png)

### Avery sheet form
![Avery sheet form](https://i.imgur.com/VwD2RU9.png)

# Main components
Example:
```
import { Sheet, Layout } from 'react-avery';
```

## `Sheet`
This component by default renders a preview normally, and a proportionally accurate sheet for print media.

### Sheet props
```
{
    selectedLocation: number, // 1-10
    selectLocation: (label: number) => void,
    LabelInsertComponent: ({ location: number }) => JSX.Element,
    className: string, // optional class names for Sheet wrapper
    style: object, // optional styles for Sheet wrapper
}
```

## `Layout`
This component wraps Sheet to create a flex layout around it, putting form on the left and the sheet on the right. To accomplish this it takes form as its children.

Layout by default renders the SheetPreview normally and SheetPrintView during print media.

### Layout props
```
{
    ...sheetProps,
    children: JSX.Element, // Form for sheet labels
    className: string, // optional class names for Form wrapper
    style: object, // optional styles for Form wrapper
}
```
