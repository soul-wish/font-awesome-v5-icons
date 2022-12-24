# font-awesome-v5-icons [![Build Status](https://travis-ci.org/soul-wish/font-awesome-v5-icons.svg?branch=master)](https://travis-ci.org/soul-wish/font-awesome-v5-icons)

> Returns actual list of Font Awesome v5 icons (plain JS array)


## Install

```
$ npm install --save font-awesome-v5-icons
```


## Usage

```js
const faIcons = require('font-awesome-v5-icons');

faIcons.getList().then(icons => console.log(icons.length));
//=> 875

faIcons.getList().then(icons => console.log(icons[0]));
/*=>
{ name: '500px',
  changes: [ '4.4', '5.0.0' ],
  label: '500px',
  search: { terms: [] },
  styles: [ 'brands' ],
  unicode: 'f26e',
  voted: false
}
*/
```

### API

### .getList()

Type: `function`

Returns a promise with a full list of actual Font Awesome v5 icons.

### .getListByKeys(arrayOfNeededKeys)

Type: `function`

Returns a promise with a full list of Font Awesome icons with needed keys only.

```js
const faIcons = require('font-awesome-v5-icons');

faIcons.getListByKeys(['name', 'styles']).then(icons => console.log(icons[0]));
//=> { name: '500px', styles: [ 'brands' ] }
```

## Additional features

-  TypeScript declarations

## Related

[font-awesome-icons](https://github.com/soul-wish/font-awesome-icons) – separate package for Font Awesome v4

## License

MIT © [Sergii Lysenko](http://soulwish.info)
