import { Component, OnInit } from '@angular/core';
import {PostsService} from "../shared/posts.service";

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    console.log(this.postsService.getName());
  }

}
