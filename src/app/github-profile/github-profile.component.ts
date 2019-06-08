import { Component, OnInit } from '@angular/core';
import { GithubService } from '../common/services/github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  userName = '';

  userData: any[] = [];
  constructor(
    private gitService: GithubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        // this.userName = 'dineshgopalchand';
        this.userName = params.get('username');
        this.getUserDetails();
      });
    this.route.queryParamMap
      .subscribe(qParams => {
        console.log(qParams);
        qParams.get('pagenumber');
        const pagenumber = qParams.get('pagenumber');
        const count = qParams.get('count');
        // this.userName = 'dineshgopalchand';
        // this.userName = qParams.get('username');
        // this.getUserDetails();
      });
  }
  getUserDetails() {
    this.gitService.getUserDetails(this.userName)
      .subscribe((userData: any) => {
        this.userData = userData;
        console.log(this.userData);
      });
  }

}
