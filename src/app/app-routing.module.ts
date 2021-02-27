import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './home/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
