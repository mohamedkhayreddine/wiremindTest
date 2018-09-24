import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  @Input()
  hist = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  getResult(mot) {this.router.navigateByUrl('/projects/' + mot); }

}
