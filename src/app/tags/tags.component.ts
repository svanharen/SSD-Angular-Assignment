import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  @Input() tagfilter : Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();
  

  setTagFilter(tag: Tag) {
    this.tagfilter = tag;
    this.newTagFilterEvent.emit(tag);
    console.log("Tag filter set to " + tag.name);
  }

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }
  ngOnInit(): void {
    this.getTags();
  }
}
