import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RepoServiceService} from '../Services/repo-service.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-git-hub-repo',
  templateUrl: './git-hub-repo.component.html',
  styleUrls: ['./git-hub-repo.component.css']
})
export class GitHubRepoComponent implements OnInit {

  @Input()
  projects: any ;
  motClef: String;
  selectTedProject: String;
  constructor(private  route: ActivatedRoute, private service: RepoServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.motClef = params['motClef'];
    });
    this.loadProjects();
  }
  loadProjects() {
    this.service.getRepos(this.motClef).subscribe(res => {
      this.projects = JSON.parse(JSON.stringify(res)).items;
      console.log(this.projects);
    });
  }

}
