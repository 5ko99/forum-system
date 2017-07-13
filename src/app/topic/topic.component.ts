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
import { Router } from '@angular/router';



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
  data: string;
  constructor(private sharedService: SharedService, private userService: UsersService, private dataService: DataService,
    private route: ActivatedRoute, private router: Router) {
    this.authInfo = this.userService.authInfo;
  }

  ngOnInit() {
    // Get from db and url info abbout this topic the link is pasted
    this.route.url.subscribe((url) => {
      this.data = '/categories/' + url[0].path + '/' + url[1].path;
      const dataRef = this.dataService.getData(this.data);
      dataRef.subscribe((snapshot) => {
        // Work with data
        this.topic = snapshot.title;
        this.questionText = snapshot.text;
        this.questionAuthor = snapshot.author;
      });
      this.answersRefs = this.dataService.getDataList(this.data + '/answers');
      this.urlPath[0] = url[0].path;
      this.urlPath[1] = url[1].path;
    });
  }

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

  deleteQestion(): void {
    if (confirm('Are you sure you want to delete this question?')) {
      this.dataService.deleteQuestion(this.data).then((snapshot) => {
        this.router.navigate(['/home']);
        alert('Successful deleted question!');
      });
    }
  }

  deleteAnswer(ref): void {
    if (confirm('Are you sure you want to delete this answer?')) {
      const path = this.data + '/answers/' + ref.$key;
      this.dataService.deleteQuestion(path);
    }
  }

}
