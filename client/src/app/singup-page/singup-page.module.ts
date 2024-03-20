import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupPageComponent } from './singup-page.component';

@NgModule({
  declarations: [SingupPageComponent],
  imports: [CommonModule],
  exports:[SingupPageComponent]
})
export class SingupPageModule {}
