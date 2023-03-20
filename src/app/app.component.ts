import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

import { Project } from './model/project';
import { Category } from './model/category';
import { Tag } from './model/tag';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Sam's Showcase";
  date = new Date();
  author = "Sam Van Haren";
  categoryfilter: Category | undefined;
  tagfilter: Tag | undefined;

  setCategoryFilter(category: Category) {
    this.categoryfilter = category;
  }

  setTagFilter(tag: Tag) {
    this.tagfilter = tag;
  }

  clearFilters() {
    this.categoryfilter = undefined;
    this.tagfilter = undefined;
  }

  // Check if the project has the tag filter
  /* hasTagFilter(tags: Tag[]) {
    if (this.tagfilter) {
      for (let tag of tags) {
        if (tag.id == this.tagfilter?.id) {
          console.log("Tag filter found in project");
          return true;
          
        }
      }
    }
    console.log("Tag filter not found in project");
    return false;
    
  } */
}
