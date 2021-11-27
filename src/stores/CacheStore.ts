export enum CacheConstants {
  USER,
  AUTHENTICATION_HEADER
}

class CacheStoreImpl {
  async setItem(key: string, object: any): Promise<void> {
    await localStorage.setItem(key, object);
  }

  async getItem(key: string): Promise<any> {
    const item = await localStorage.getItem(key);
    return item;
  }
}

export const CacheStore = new CacheStoreImpl();