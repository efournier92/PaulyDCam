import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivestreamComponent } from './components/livestream/livestream.component';

const routes: Routes =
  [
    {
      path: '',
      component: LivestreamComponent,
    },
    {
      path: 'live',
      component: LivestreamComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

