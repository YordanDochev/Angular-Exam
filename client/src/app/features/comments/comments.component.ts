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
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activeRouter.params.subscribe({
      next: (data) => (this.carId = data['carId']),
      error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
    });
    this.commentService.getPosts(this.carId).subscribe({
      next: (data) => (this.posts = data),
      error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
    });
    this.userService.user$.subscribe({
      next: (data) => {
        if (data === undefined) {
          this.isLogged = false;
        } else {
          this.isLogged = true;
        }
      },
      error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
    });
  }
  onCommentHandler(form: NgForm) {
    const { postText } = form.value;

    this.commentService.createPost(this.carId, postText).subscribe((data) => {
      this.commentService.getPosts(this.carId).subscribe({
        next: (data) => (this.posts = data),
        error: (error) => this.router.navigate([`/error/:${error.statusText}`]),
      });
    });
    form.reset();
  }
}
