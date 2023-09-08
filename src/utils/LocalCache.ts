class LocalCache {
  #expireTime;
  #now;

  constructor() {
    this.#now = new Date().getTime();
    this.#expireTime = 5 * 60 * 1000;
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    const item = value ? JSON.parse(value) : null;

    if (item && this.#now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item ? item.value : null;
  }

  set(key: string, value: object) {
    const item = {
      value: value,
      expiry: this.#now + this.#expireTime,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }
}

export const localCache = new LocalCache();
