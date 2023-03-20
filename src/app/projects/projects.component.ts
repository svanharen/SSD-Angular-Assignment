import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../model/project';
import { Category } from '../model/category';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  @Input() categoryfilter : Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagfilter : Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setCategoryFilter(category: Category) {
    this.categoryfilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagfilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  clearFilters() {
    this.categoryfilter = undefined;
    this.tagfilter = undefined;
  }
  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
  ngOnInit(): void {
    this.getProjects();
  }

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

  
}
