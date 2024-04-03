import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from './comments.service';
import { Post } from 'src/app/types/posts';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input('isOwner') isOwner: boolean = false;
  carId: string = '';
  posts: Post[] = [];
  isLogged: boolean = true;

  constructor(
    private activeRouter: ActivatedRoute,
    private commentService: CommentsService,
    private userService:UserService
    ) {}
  ngOnInit(): void {
    this.activeRouter.params.subscribe((data) => {
      this.carId = data['carId'];
    });
    this.commentService
      .getPosts(this.carId)
      .subscribe((data) => (this.posts = data));
    this.userService.user$.subscribe((data) => {
      if (data === undefined) {
        this.isLogged = false;
      } else {
        this.isLogged = true;
      }
    });
  }
  onCommentHandler(form: NgForm) {
    const { postText } = form.value;

    this.commentService.createPost(this.carId, postText).subscribe((data) => {
      this.commentService
        .getPosts(this.carId)
        .subscribe((data) => (this.posts = data));
    });
    form.reset();
  }
}
