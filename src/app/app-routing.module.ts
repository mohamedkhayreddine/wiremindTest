import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RechercheComponent} from './recherche/recherche.component';
import {GitHubRepoComponent} from './git-hub-repo/git-hub-repo.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';


const routes: Routes = [
  { path : '' , component : RechercheComponent} ,
  { path: 'projects/:motClef', component: GitHubRepoComponent } ,
  { path: 'projects/:repo/:owner', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
