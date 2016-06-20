'use strict';

const lodash = require('lodash');

module.exports = (baseClass) => {

  class Model extends baseClass {

    set keyMap (val) {

      this.meta.keyMap = val;
      this.meta.reverseKeyMap = lodash.invert(val);
    }

    remapKeys (obj, map) {

      if (Array.isArray(obj)) {
        return obj.map(key => map[key] || key);
      }

      return lodash.mapKeys(obj, (value, key) => {

        if (map.hasOwnProperty(key)) {
          return [map[key]]
        } 
        return key;
      });
    }

    mapTo (obj) {

      return this.meta.keyMap ? this.remapKeys(obj, this.meta.keyMap): obj;
    }

    mapFrom (obj) {

      return this.meta.keyMap ? this.remapKeys(obj, this.meta.reverseKeyMap): obj;
    }

  }

  return Model;
};
