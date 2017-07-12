import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
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
  topic: string;
  urlPath = ['', ''];
  authInfo: Observable<firebase.UserInfo>;
  answersRefs;
  questionText: string;
  questionAuthor: string;
<<<<<<< HEAD
  canDelete = false;
=======
>>>>>>> 323cbbbd3f6b084ba1331f7448b04bc0d12221e8
  constructor(private sharedService: SharedService, private userService: UsersService, private dataService: DataService,
    private route: ActivatedRoute) {
    this.authInfo = this.userService.authInfo;
  }

  ngOnInit() {
    // Get from db and url info abbout this topic the link is pasted
    this.route.url.subscribe((url) => {
      const data: string = '/categories/' + url[0].path + '/' + url[1].path;
      const dataRef = this.dataService.getData(data);
      dataRef.subscribe((snapshot) => {
        // Work with data
        this.topic = snapshot.title;
        this.questionText = snapshot.text;
        this.questionAuthor = snapshot.author;
      });
      this.answersRefs = this.dataService.getDataList(data + '/answers');
      this.urlPath[0] = url[0].path;
      this.urlPath[1] = url[1].path;
    });

    if(this.questionAuthor === this.sharedService.loggedUser){
      this.canDelete = true;
    }
  }

  // TODO: Save no email info and username to user
  addPost(myForm: NgForm) {
    // Add post to db
    let post: Comment;
    const postText: string = myForm.form.value.postText;
    let postAuthor: string;
    this.authInfo.subscribe((user: firebase.User) => {
      postAuthor = user.displayName;
      post = new Comment(postAuthor, postText);
      const path = '/categories/' + this.urlPath[0] + '/' + this.urlPath[1] + '/answers/';
      this.dataService.writeAnswer(path, post);
    });
  }

}
