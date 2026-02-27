import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonInput,
  IonList,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonSegment,
  IonSegmentButton,
  IonNote,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonButton,
    IonInput,
    IonList,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonSegment,
    IonSegmentButton,
    IonNote,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule,
    FormsModule
  ]
})
export class TaskListPage implements OnInit {

  tasks: Task[] = [];
  categories: Category[] = [];
  categoryMap: Record<string, string> = {};

  newTaskTitle: string = '';
  selectedCategoryId?: string;
  filterCategoryId: string = 'all';

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    addIcons({ trash });
  }

  ngOnInit() {
    this.loadCategories();
    this.loadTasks();
  }

  /* ========================
     LOADERS
  ======================== */

  private loadCategories() {
    this.categories = this.categoryService.getCategories();
    this.buildCategoryMap();
  }

  loadTasks() {
    const allTasks = this.taskService.getTasks();

    if (this.filterCategoryId === 'all') {
      this.tasks = allTasks;
    } else {
      this.tasks = allTasks.filter(
        task => task.categoryId === this.filterCategoryId
      );
    }
  }

  /* ========================
     CATEGORY MAP (OPTIMIZACIÓN)
  ======================== */

  private buildCategoryMap() {
    this.categoryMap = this.categories.reduce((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {} as Record<string, string>);
  }

  /* ========================
     CRUD TASKS
  ======================== */

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    this.taskService.addTask(
      this.newTaskTitle,
      this.selectedCategoryId
    );

    this.newTaskTitle = '';
    this.selectedCategoryId = undefined;

    this.loadTasks();
  }

  toggleTask(id: string) {
    this.taskService.toggleTask(id);
    this.loadTasks();
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  /* ========================
     FILTER
  ======================== */

  applyFilter() {
    this.loadTasks();
  }

  /* ========================
     TRACK BY (RENDIMIENTO)
  ======================== */

  trackById(index: number, task: Task) {
    return task.id;
  }
  goToCategories() {
  this.router.navigate(['/category']);
}
}