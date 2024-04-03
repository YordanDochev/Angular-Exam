import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from 'src/app/types/posts';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  createPost(carId: string, postText: string) {
    return this.http.post<Post>(`/api/posts/create/${carId}`, { postText });
  }

  getPosts(carId: string) {
    return this.http.get<Post[]>(`/api/posts/${carId}`);
  }
}
