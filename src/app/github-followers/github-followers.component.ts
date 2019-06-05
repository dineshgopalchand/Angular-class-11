import { Component, OnInit } from '@angular/core';
import { GithubService } from '../common/services/github.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  userName = 'bradlygreen';
  followersList: any = [];
  // icon = '<i class="fa fa-arrow"></i>';
  constructor(public gitService: GithubService) { }

  ngOnInit() {
    this.gitService.getFollowerList(this.userName)
      .subscribe(response => {
        this.followersList = response;
        console.log(this.followersList);
      });
  }

}
