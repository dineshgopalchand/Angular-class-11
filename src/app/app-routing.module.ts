import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: HomeComponent },
  { path: 'git-followers', component: GithubFollowersComponent },
  { path: 'git-profile', component: GithubProfileComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
