import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '.././models/post.model';
import {SharedService} from './../services/shared.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  // Get post for this topic in this array
  posts: Post[];
  topic: string;
  constructor(private sharedService: SharedService) {
    this.posts = [new Post('Petko', 'Help me please', 0),
    new Post('Ivan', 'I am helping you', 0)];
  }

  ngOnInit() {
    this.topic = this.sharedService.selectedTopic;
  }

  addPost(myForm: NgForm) {
    // Add post to db
    const postText: string =  myForm.form.value.postText;
    const postAuthor: string = myForm.form.value.postAuthor;
    const post: Post = new Post(postText, postAuthor, 0);
    this.posts.push(post);
  }

}
