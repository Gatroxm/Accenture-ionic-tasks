import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  private setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T {
    return this.getItem<T>(key);
  }

  set(key: string, value: any): void {
    this.setItem(key, value);
  }
}