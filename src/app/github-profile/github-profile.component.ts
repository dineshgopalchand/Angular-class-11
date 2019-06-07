import { Component, OnInit } from '@angular/core';
import { GithubService } from '../common/services/github.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  userName = 'dineshgopalchand';
  userData: any[] = [];
  constructor(private gitService: GithubService) { }

  ngOnInit() {
    this.gitService.getUserDetails(this.userName)
      .subscribe((userData: any) => {
        this.userData = userData;
        console.log(this.userData);
      });
  }

}
