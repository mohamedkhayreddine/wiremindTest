import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RepoServiceService} from '../Services/repo-service.service';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input()
  commiters: any;
  impacts = [];
  events: any;
  commits: number;
  owner: any;
  repo: any;
  bookmark = [];
  constructor(private route: ActivatedRoute, private service: RepoServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.owner = params['owner'];
      this.repo = params['repo'];
    });
   this.getStats();
  }
  getStats() {
    console.log(this.owner + '***' + this.repo);
    this.service.getCommitters(this.repo , this.owner).subscribe(res => {
      this.commiters = res ;
      this.commits = 0;
      for (let i = 0; i < this.commiters.length ; i++) {

        this.commits = this.commits + this.commiters[i].contributions;
      }
      console.log(this.commits)
      for (let i = 0; i < this.commiters.length ; i++) {
        this.impacts.push(((this.commiters[i].contributions / this.commits) * 100).toFixed(2));
      }
    });
    this.service.getEvents(this.owner , this.repo).subscribe(res => {
      this.events = res ;
    });
  }
  createBookMark() {
    this.bookmark.push(this.route.url);

  }

}
