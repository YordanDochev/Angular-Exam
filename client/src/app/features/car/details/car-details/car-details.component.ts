import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserService } from 'src/app/features/user/user.service';
import { Car } from 'src/app/types/car';
import { AuthUser } from 'src/app/types/user';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent{
  @Input('car') car = {} as Car;
  @Input('isOwner') isOwner: boolean = false;

}
