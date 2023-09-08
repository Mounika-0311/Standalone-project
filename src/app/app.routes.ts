import { Routes } from '@angular/router';
import { RouterInputsComponent } from './router-inputs/router-inputs.component';
import { SampleComponent } from './sample/sample.component';

export const routes: Routes = [
    {path: 'sample', component: SampleComponent},
    {path: 'router-inputs/:id', component: RouterInputsComponent,
        data:{
            role:'Super-Admin',
        },
        // resolve:{
        //     message: 'Standalone Resolver',
        // }
    }
];
