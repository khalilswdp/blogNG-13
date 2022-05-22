import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SinglePostComponent } from './posts-container/single-post/single-post.component';
import {PostsService} from "./shared/posts.service";

@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    NavigationComponent,
    SinglePostComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
