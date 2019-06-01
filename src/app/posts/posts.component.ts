import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../common/helpers/posts';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { PostService } from '../common/services/post.service';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  // posts: Posts[] = ([] as Posts[]);
  // @Input() inputparameter;
  errorType: any;
  posts: Posts[] = [];
  // postsAsync = Observable.create([]);
  constructor(public postService: PostService) {

  }

  ngOnInit() {
    // to get all data
    this.postService.getAll()
      .subscribe(respose => {
        console.log('data', respose);
        this.posts = (respose as Posts[]);
      }, error => {
        if (error instanceof (NotFoundError)) {
          this.errorType = 'Not found';
        } else
          if (error instanceof (BadInputError)) {
            this.errorType = 'Inputed details of not valid';
          } else {
            this.errorType = 'Please Try Again Later';
          }
      });

    // this will be usefull when working on filter
    // this.postService.getAllWithParam({ start: 0, noofElement: 10, q: 'a' })
    //   .subscribe(response => {
    //     console.log(response);
    //   });
    // this.postsAsync = this.http.get('http://localhost:3000/posts');
  }

  createNewPost(form: NgForm) {
    console.log(form.value);
    this.createPost(form.value);
  }
  createPost(userData: Posts) {
    this.postService.create(userData)
      .subscribe((respose: Posts) => {
        // console.log('${data}');
        console.log(respose);
        this.posts.splice(0, 1, respose);
      });
  }
  deletePost(post: Posts) {
    this.postService.delete(post)
      .subscribe(() => {
        // console.log(respose);
        const indexVal = this.posts.indexOf(post);
        this.posts.splice(indexVal, 1);
      });
  }
  updataPost(post: Posts) {
    const indexVal = this.posts.indexOf(post);
    post.title += '-------';
    console.log(post);
    this.postService.update(post)
      .subscribe((response: Posts) => {
        console.log(response);
        this.posts.splice(indexVal, 1, response);
      });
    // this.http.put('http://localhost:3000/posts/' + post.id, { title: 'abc' })
    //   .subscribe((response: Posts) => {
    //     console.log(response);
    //     this.posts.splice(indexVal, 1, response);
    //   });
    // this.http.patch('http://localhost:3000/posts/' + post.id, { title: 'abc' })
    //   .subscribe((response: Posts) => {
    //     console.log(response);
    //     this.posts.splice(indexVal, 1, response);
    //   });
  }


  ngOnDestroy() {
    console.log('ngOnDestroy get called');
  }

}
