// @ts-check

import _ from 'lodash';

class InMemoryKV {
  constructor(data = {}) {
    this.data = _.cloneDeep(data);
  }

  set(key, value) {
    this.data[key] = value;
  }

  unset(key) {
    this.data = _.omit(this.data, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.data, key, defaultValue);
  }

  toObject() {
    return _.cloneDeep(this.data);
  }
}

export default InMemoryKV;
