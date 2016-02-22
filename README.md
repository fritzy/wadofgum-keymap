## wadofgum-keymap

A key remapper mixin for [wadofgum](https://github.com/nlf/wadofgum).

### Usage

```js
const wadofgum = require('wadofgum');
const wadofgumKeyMap = require('wadofgum-keymap');

const ModelClass = wadofgum.mixin(wadofgumKeyMap);

const myModel = new ModelClass({
  keyMap: {
    inkey: 'outkey',
    inkey2: 'outkey2'
  }
});

const myobj = {
  inkey: 'hi',
  inkey2: 'bye'
}

const mappedobj = myModel.mapTo(myobj);
console.log(mappedobj)
// {outkey: 'hi', outkey2: 'bye'}

const revobj = myModel.mapFrom(mappedobj);
console.log(revobj);
// {inkey: 'hi', inkey2: 'bye'}
```

