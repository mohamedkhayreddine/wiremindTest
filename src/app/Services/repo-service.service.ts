import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  private URL: String = 'https://api.github.com';
  constructor(private http: HttpClient) { }
  getRepos(motClef) {
    return this.http.get(this.URL + '/search/repositories?q=' + motClef) ;
  }
  getCommitters(owner , repo ) {
    return this.http.get(this.URL + '/repos/' + repo + '/' + owner + '/contributors');
  }
  getEvents(owner , repo) {
    return this.http.get(this.URL + '/repos/' + owner + '/' + repo + '/events');
  }
}
