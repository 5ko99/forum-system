import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from '.././models/comment.model';
import { SharedService } from './../services/shared.service';
import { UsersService } from '.././services/users.service';
import { DataService } from '.././services/data.service';
import { ActivatedRoute } from '@angular/router';

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
  urlPath = ['', ''];
  authInfo: Observable<firebase.UserInfo>;
  constructor(private sharedService: SharedService, private userService: UsersService, private dataService: DataService,
    private route: ActivatedRoute) {
    this.posts = [new Comment('Petko', 'Help me please'),
    new Comment('Ivan', 'I am helping you')];
    this.authInfo = this.userService.authInfo;
  }

  ngOnInit() {
    // Get from db and url info abbout this topic the link is pasted
    this.route.url.subscribe((url) => {
      const dataRef = this.dataService.getData('/categories/' +
        url[0].path + '/' + url[1].path);
      dataRef.subscribe((snapshot) => {
        // Work with data
        this.topic = snapshot.title;
        console.log(snapshot.author);
      });
      this.urlPath[0] = url[0].path;
      this.urlPath[1] = url[1].path;
    });
  }

  addPost(myForm: NgForm) {
    // Add post to db
    let post: Comment;
    const postText: string = myForm.form.value.postText;
    let postAuthor: string;
    this.authInfo.subscribe((snapshot) => {
      postAuthor = snapshot.email;
      post = new Comment(postAuthor, postText, );
      const path = '/categories/' + this.urlPath[0] + '/' + this.urlPath[1] + '/answers/';
      this.dataService.writeAnswer(path, post);
      this.posts.push(post);
    });
  }

}
