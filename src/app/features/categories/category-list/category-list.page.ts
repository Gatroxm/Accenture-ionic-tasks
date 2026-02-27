import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonList,
  IonIcon,
  IonBadge
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    IonList,
    IonIcon,
    IonBadge,
    CommonModule,
    FormsModule
  ]
})
export class CategoryListPage implements OnInit {

  categories: Category[] = [];
  newCategoryName: string = '';
  newCategoryColor: string = '#3880ff';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    addIcons({ trash });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categories = this.categoryService.getCategories();
  }

  addCategory() {
    if (!this.newCategoryName.trim()) return;

    this.categoryService.addCategory(
      this.newCategoryName,
      this.newCategoryColor
    );

    this.newCategoryName = '';
    this.newCategoryColor = '#3880ff';
    this.loadCategories();
  }

  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id);
    this.loadCategories();
  }

  trackById(index: number, category: Category) {
    return category.id;
  }
  goToTasks() {
    this.router.navigate(['/tasks']);
  }

}