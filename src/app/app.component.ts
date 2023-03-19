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
  title = 'angular_assignment_part1';
  date = new Date();
  author = "Sam Van Haren";
  categories = categories;
  tags = tags;
  projects = projects;
  categoryfilter? : Category | undefined;
  tagfilter? : Tag | undefined;

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
  hasTagFilter(tags: Tag[]) {
    if (this.tagfilter) {
      for (let tag of tags) {
        if (tag.id == this.tagfilter?.id) {
          return true;
        }
      }
      return false;
    }
    return false;
  }
}
