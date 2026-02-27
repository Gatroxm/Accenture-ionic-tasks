import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly STORAGE_KEY = 'categories';

  constructor(private storage: StorageService) {}

  getCategories(): Category[] {
    return this.storage.get<Category[]>(this.STORAGE_KEY);
  }

  addCategory(name: string, color?: string) {
    const categories = this.getCategories();

    const newCategory: Category = {
      id: crypto.randomUUID(),
      name,
      color,
      createdAt: new Date()
    };

    categories.push(newCategory);
    this.storage.set(this.STORAGE_KEY, categories);
  }

  deleteCategory(id: string) {
    const categories = this.getCategories().filter(c => c.id !== id);
    this.storage.set(this.STORAGE_KEY, categories);
  }
}
