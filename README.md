# Const & Props Snippets

[![Version](https://vsmarketplacebadge.apphb.com/version/deinsoftware.const-props-snippets.svg?color=blue&label=version)](https://marketplace.visualstudio.com/items?itemName=deinsoftware.const-props-snippets)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/deinsoftware.const-props-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=deinsoftware.const-props-snippets)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/deinsoftware.const-props-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=deinsoftware.const-props-snippets)
[![license](https://img.shields.io/github/license/deinsoftware/vscode-const-props-snippets)](LICENSE.md)
[![Open in VS Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/deinsoftware/vscode-const-props-snippets)

![Const & Props](https://raw.githubusercontent.com/deinsoftware/vscode-const-props-snippets/main/.github/social/preview.png 'Const & Props Snippets')

The quick and easy way to create and use Const & Props with [VS Code](https://code.visualstudio.com/).

> We also **recommend** installing his complement extensions [Arrow Function Snippets](https://marketplace.visualstudio.com/items?itemName=deinsoftware.arrow-function-snippets) and [Debug](https://marketplace.visualstudio.com/items?itemName=deinsoftware.debug-snippets)

## Menu

- [Installation](#installation)
  - [Quick Launch](#quick-launch)
  - [Extension Manager](#extension-manager)
  - [Marketplace](#marketplace)
- [Supported Languages](#supported-languages)
- [Snippets](#snippets)
  - [Variables](#variables)
  - [Destructuring](#destructuring)
  - [Object Elements](#object-elements)
  - [JSON Elements](#json-elements)
  - [React](#react)
  - [React Components](#react-components)
- [Examples](#examples)
- [About](#about)

---

## Installation

### Quick Launch

Open the quick launch with <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> (Win/Linux) or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> (macOS).

Paste the following command and press `Enter`:

```shell
ext install deinsoftware.const-props-snippets
```

### Extension Manager

Open the extension manager with <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>X</kbd> (Win/Linux) or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>X</kbd> (macOS), search for `Const & Props Snippets` and click on `[Install]` button.

### Marketplace

[Const & Props Snippets](https://marketplace.visualstudio.com/items?itemName=deinsoftware.const-props-snippets)

⇧ [Back to menu](#menu)

---

## Supported Languages

| Language         | Extension |
| ---------------- | --------- |
| JavaScript       | `.js`     |
| TypeScript       | `.ts`     |
| JavaScript React | `.jsx`    |
| TypeScript React | `.tsx`    |
| Vue              | `.vue`    |
| JSON             | `.json`   |
| JSONC            | `.jsonc`  |
| JSON5            | `.json5`  |

⇧ [Back to menu](#menu)

---

## Snippets

Below is a list of all available snippets and the triggers of each one. The **→** means the `TAB` key and `█` the final cursor position.

### Variables

|  Trigger | Description                  | Result JS                                                                             | Result TS                                                                                     |
| -------: | ---------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    `cv→` | const variable               | `const name = █`                                                                      | `const name = █`                                                                              |
|   `cvt→` | const variable type          |                                                                                       | `const name: type = █`                                                                        |
|   `cvm→` | const variable multiple type |                                                                                       | <code>const name: (type &#124; type) = █</code>                                               |
|    `cs→` | const string                 | `const name = ''█`                                                                    | `const name: string = ''█`                                                                    |
|    `cn→` | const number                 | `const name = 0█`                                                                     | `const name: number = 0█`                                                                     |
|    `cb→` | const boolean                | `const name = true█`                                                                  | `const name: boolean = true█`                                                                 |
|    `co→` | const object                 | `const name = {}█`                                                                    | `const name = {}█`                                                                            |
|   `coi→` | const object interface       |                                                                                       | `const name: Interface = {}█`                                                                 |
|    `ca→` | const array                  | `const name = []█`                                                                    | `const name = []█`                                                                            |
|   `cat→` | const array type             |                                                                                       | `const name: type = []█`                                                                      |
|   `cam→` | const array multiple type    |                                                                                       | <code>const name: (type &#124; type) = []█</code>                                             |
|    `cp→` | const promise                | <code>const name = new Promise((resolve, reject) => {<br/>&nbsp;&nbsp;█<br/>})</code> | <code>const name = new Promise<string>((resolve, reject) => {<br/>&nbsp;&nbsp;█<br/>})</code> |

### Destructuring

|  Trigger | Description                     | Result JS/TS                          |
| -------: | ------------------------------- | ------------------------------------- |
|   `cod→` | const object dest               | `const {prop, prop} = name█`          |
|  `codr→` | const object dest with rest     | `const {prop, prop, ...rest} = name█` |
|   `cad→` | const array dest                | `const [prop, prop] = name█`          |
|  `cadr→` | const array dest with rest      | `const [prop, prop, ...rest] = name█` |
|    `pd→` | parameter object dest           | `{prop, prop}█`                       |
|   `pdr→` | parameter object dest with rest | `{prop, prop, ...rest}█`              |

### Object Elements

|  Trigger | Description                  | Result JS/TS                                          |
| -------: | ---------------------------- | ----------------------------------------------------- |
|   `oev→` | obj element variable         | `key: value,█`                                        |
|   `oes→` | obj element string           | `key: 'value',█`                                      |
|   `oen→` | obj element number           | `key: number,█`                                       |
|   `oeb→` | obj element boolean          | `key: true,█`                                         |
|   `oeo→` | obj element object           | `key: { element },█`                                  |
|  `oeom→` | obj element object multiline | <code>key: {<br/>&nbsp;&nbsp;element, <br/>},█</code> |
|   `oea→` | obj element array            | `key: [ value ],█`                                    |
|  `oeam→` | obj element array multiline  | <code>key: [<br/>&nbsp;&nbsp;value, <br/>],█</code>   |

### JSON Elements

|  Trigger | Description                   | Result JS/TS                                            |
| -------: | ----------------------------- | ------------------------------------------------------- |
|   `jes→` | json element string           | `key: 'value',█`                                        |
|   `jev→` | json element variable         | `key: value,█`                                          |
|   `jen→` | json element number           | `key: number,█`                                         |
|   `jeb→` | json element boolean          | `key: true,█`                                           |
|   `jeo→` | json element object           | `key: { element },█`                                    |
|  `jeom→` | json element object multiline | <code>key: {<br/>&nbsp;&nbsp;element , <br/>},█</code>  |
|   `jea→` | json element array            | `key: [ value ],█`                                      |
|  `jeam→` | json element array multiline  | <code>key: [<br/>&nbsp;&nbsp;value , <br/>],█</code>    |

> ℹ️ Only available in `.json`, `.jsonc` and `.json5` files

### React

|  Trigger | Description                  | Result JSX/TSX                                                                                                                   |
| -------: | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
|   `rhe→` | react handle event           | <code>const handleEvent = (event) => {<br/>&nbsp;&nbsp;const {name, value} = event.target<br/>&nbsp;&nbsp;█<br/>}</code>         |
|  `rhen→` | react handle event as number | <code>const handleEvent = (event) => {<br/>&nbsp;&nbsp;const {name, valueAsNumber} = event.target<br/>&nbsp;&nbsp;█<br/>}</code> |
|  `rhed→` | react handle event as date   | <code>const handleEvent = (event) => {<br/>&nbsp;&nbsp;const {name, valueAsDate} = event.target<br/>&nbsp;&nbsp;█<br/>}</code>   |

### React Components

|  Trigger | Description                  | Result JSX/TSX              |
| -------: | ---------------------------- | --------------------------- |
|    `rp→` | react property               | `prop={prop}█`              |
|   `rps→` | react property string        | `prop=''█`                  |
|   `rpn→` | react property number        | `prop={0}█`                 |
|   `rpb→` | react property boolean       | `prop={true}█`              |
|   `rpo→` | react property object        | `prop={{}}█`                |
|   `rpa→` | react property array         | `prop={[]}█`                |
|  `rpcn→` | react property className     | `className=''█`             |
| `rpocl→` | react property onClick       | `onClick={handleClick}}█`   |
| `rpoch→` | react property onChange      | `onChange={handleChange}}█` |

> ℹ️ Only available in `jsx` or `tsx`

⇧ [Back to menu](#menu)

---

## Examples

Creating properties on a React component with `rp`, `rpn` and `rpb`

![React](https://raw.githubusercontent.com/deinsoftware/vscode-const-props-snippets/main/.github/examples/example-reactprops.gif 'React')

⇧ [Back to menu](#menu)

---

## About

### Built With

- [VS Code](https://code.visualstudio.com/) - Code editing redefined.
- [Figma](https://www.figma.com/) - The collaborative interface design tool.

### Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [Const & Props Snippets](https://github.com/deinsoftware/vscode-const-props-snippets/tags) on GitHub.

### Authors

- **Camilo Martinez** [[Equiman](http://github.com/equiman)]

See also the list of [contributors](https://github.com/deinsoftware/vscode-const-props-snippets/contributors) who participated in this project.

### Sponsors

If this project helps you, consider buying me a cup of coffee.

[![paypal](https://img.shields.io/badge/-PayPal-gray?style=flat&labelColor=00457C&logo=paypal&logoColor=white&link=https://paypal.me/equiman/3)](https://paypal.me/equiman/3)
[![ko-fi](https://img.shields.io/badge/-Ko–Fi-gray?style=flat&labelColor=fd444a&logo=ko-fi&logoColor=white&link=https://ko-fi.com/equiman)](https://ko-fi.com/equiman)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

⇧ [Back to menu](#menu)
