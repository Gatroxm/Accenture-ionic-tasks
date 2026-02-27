import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly STORAGE_KEY = 'tasks';

  constructor(private storage: StorageService) {}

  getTasks(): Task[] {
    return this.storage.get<Task[]>(this.STORAGE_KEY);
  }

  addTask(title: string, categoryId?: string): void {
  const tasks = this.getTasks();

  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createdAt: new Date(),
    categoryId
  };

  tasks.push(newTask);
  this.storage.set(this.STORAGE_KEY, tasks);
}

  toggleTask(id: string): void {
    const tasks = this.getTasks().map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    this.storage.set(this.STORAGE_KEY, tasks);
  }

  deleteTask(id: string): void {
    const tasks = this.getTasks().filter(task => task.id !== id);
    this.storage.set(this.STORAGE_KEY, tasks);
  }
}