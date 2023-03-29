import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() postId!: number;
}
