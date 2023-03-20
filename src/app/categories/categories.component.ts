import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService) {}

  @Input() categoryfilter : Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();

  categoryFilter: Category | undefined;
  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }  

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
  ngOnInit(): void {
    this.getCategories();
  }
}
