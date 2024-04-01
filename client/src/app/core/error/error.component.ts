import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMsg: string = '';

  constructor(private activeRouter: ActivatedRoute) {}
  ngOnInit(): void {
    this.activeRouter.params.subscribe((data:any) => (this.errorMsg = data.errorMsg));
  }
}
