import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-router-inputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-inputs.component.html',
  styleUrls: ['./router-inputs.component.css']
})
export class RouterInputsComponent {
  // input decorators coming from the routes
  @Input() id!:string;
  @Input() queryParam!:string;
  @Input() role!:string;
  // @Input() message!:string;
}
