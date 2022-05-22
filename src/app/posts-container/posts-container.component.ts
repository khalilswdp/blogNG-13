import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-container',
  template: `<h4>This is App Posts Container</h4>`,
  styles: ['h4 {color: red}']
})
export class PostsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
