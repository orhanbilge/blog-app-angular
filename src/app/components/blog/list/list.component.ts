import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'blog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  id: number;
  name: string;
  constructor(private route: ActivatedRoute) {
    this.id = 0;
    this.name = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['categoryId'];
    });
  }
}
