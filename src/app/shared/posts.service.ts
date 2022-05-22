import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class PostsService {

  constructor() { }

  getName(): string {
    return 'Khalil SWDP'
  }
}
