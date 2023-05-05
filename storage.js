export const STORAGE = {
  LOCAL: localStorage,
  SESSION: sessionStorage,
};

export class Storage {
  constructor(key, storage, defaultValue) {
    this.key = key;
    this.value = defaultValue;
    this.storage = storage ? storage : STORAGE.LOCAL;
  }

  get() {
    const request = this.storage.getItem(this.key);
    if (request === 'undefined' || request === 'NaN') {
      return request;
    }
    return JSON.parse(request);
  }

  set(value = this.value) {
    if (value) {
      return this.storage.setItem(this.key, JSON.stringify(value));
    }
    return this.storage.setItem(this.key, value);
  }

  clear() {
    return this.storage.removeItem(this.key);
  }

  isEmpty() {
    const check = this.storage.getItem(this.key) ?? 'empty';
    if (check === 'empty') {
      return true;
    } else {
      return false;
    }
  }
}
