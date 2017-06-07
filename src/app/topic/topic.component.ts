import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from '.././models/comment.model';
import { SharedService } from './../services/shared.service';
import { UsersService } from '.././services/users.service';
import { DataService } from '.././services/data.service';

import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/auth';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  // Get post for this topic in this array
  posts: Comment[];
  topic: string;
  authInfo: Observable<firebase.UserInfo>;
  constructor(private sharedService: SharedService, private userService: UsersService, private dataService: DataService) {
    this.posts = [new Comment('Petko', 'UID', 'Help me please'),
    new Comment('Ivan', 'UID', 'I am helping you')];
    this.authInfo = this.userService.authInfo;
  }

  ngOnInit() {
    if (this.sharedService.selectedTopic && this.sharedService.categorieToAks) {
      // Is not empty
      this.topic = this.sharedService.selectedTopic.title;
      const dataRef = this.dataService.getData('/categories/' +
      this.sharedService.categorieToAks + '/' + this.sharedService.selectedTopic.$key);
    dataRef.subscribe((snapshot) => {
      // Work with data
      console.log(snapshot.author);
    });
    } else {
      // Is empty: get from db info abbout this topic the link is pasted
    }
  }

  addPost(myForm: NgForm) {
    // Add post to db
    let post: Comment;
    const postText: string = myForm.form.value.postText;
    let postAuthor: string;
    this.authInfo.subscribe((snapshot) => {
      postAuthor = snapshot.email;
      post = new Comment(postAuthor, 'uid', postText, );
      this.posts.push(post);
    });
  }

}
