import { Component } from '@angular/core';

const projects = require('../assets/projects.json');
const categories = require('../assets/categories.json');
const tags = require('../assets/tags.json');

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category;
  'tags': Tag[] | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Sam's Showcase";
  date = new Date();
  author = "Sam Van Haren";
  categories = categories;
  tags = tags;
  projects = projects;
  categoryfilter? : Category | undefined;
  tagfilter? : Tag | undefined;

  setCategoryFilter(category: Category) {
    this.categoryfilter = category;
    console.log("Category filter set to: " + category.name);
  }

  setTagFilter(tag: Tag) {
    this.tagfilter = tag;
    console.log("Tag filter set to: " + tag.name);
  }

  clearFilters() {
    this.categoryfilter = undefined;
    this.tagfilter = undefined;
  }

  // Check if the project has the tag filter
  hasTagFilter(tags: Tag[]) {
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
    
  }

  toggleDivTag(tag: Tag){
   
  }
}
