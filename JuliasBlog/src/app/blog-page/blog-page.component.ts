import { Component, OnInit } from '@angular/core';
import { blogEntries } from '../blog-entries'

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogEntries = blogEntries;
  
  constructor() { }

  ngOnInit(): void {
  }

}
