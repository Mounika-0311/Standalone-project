import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  destroyRef = inject(DestroyRef);
  // constructor(){}
  // Required inputs feature
  // @Input({required: true}) name: string = '';
constructor(){
  this.destroyRef.onDestroy(()=>{console.log('destroyed')})
}
name = signal('jasica');
updateName(name : string){
  this.name.set(name);
}

}
