// utils/localStorage.ts

export class LocalStorageService {
    private static getCollection<T>(key: string): T[] {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    }
  
    private static saveCollection<T>(key: string, data: T[]): void {
      localStorage.setItem(key, JSON.stringify(data));
    }
  
    static getAll<T>(key: string): T[] {
      return this.getCollection<T>(key);
    }
  
    static getById<T extends { id: string | number }>(key: string, id: string | number): T | undefined {
      const collection = this.getCollection<T>(key);
      return collection.find(item => item.id === id);
    }
  
    static add<T extends { id: string | number }>(key: string, item: T): void {
      const collection = this.getCollection<T>(key);
      collection.push(item);
      this.saveCollection(key, collection);
    }
  
    static update<T extends { id: string | number }>(key: string, updatedItem: T): void {
      let collection = this.getCollection<T>(key);
      collection = collection.map(item => (item.id === updatedItem.id ? updatedItem : item));
      this.saveCollection(key, collection);
    }
  
    static delete(key: string, id: string | number): void {
      const collection = this.getCollection<any>(key);
      const filteredCollection = collection.filter(item => item.id !== id);
      this.saveCollection(key, filteredCollection);
    }
  
    static clear(key: string): void {
      localStorage.removeItem(key);
    }
  }
  