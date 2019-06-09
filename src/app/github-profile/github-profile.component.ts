import { Component, OnInit } from '@angular/core';
import { GithubService } from '../common/services/github.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import { combineLatest } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  userName = '';
  pagenumber = 1;
  count = 0;
  userData: any[] = [];
  constructor(
    private gitService: GithubService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // combineLatest(
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ).subscribe(combined => {
    //   console.log(combined);
    //   this.userName = combined[0].get('username');
    //   combined[1].get('pagenumber');
    //   const pagenumber = combined[1].get('pagenumber');
    //   const count = combined[1].get('count');
    //   this.gitService.getUserDetails(this.userName)
    //     .subscribe((userData: any) => {
    //       this.userData = userData;
    //       console.log(this.userData);
    //     });
    // });
    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    ).pipe(
      switchMap(combined => {
        this.userName = combined[0].get('username');
        combined[1].get('pagenumber');
        // tslint:disable-next-line:radix
        this.pagenumber = parseInt(combined[1].get('pagenumber'));
        // tslint:disable-next-line:radix
        this.count = parseInt(combined[1].get('count'));
        return this.gitService.getUserDetails(this.userName);
      }))
      .subscribe((userData: any) => {
        this.userData = userData;
        console.log(this.userData);
      });


    // this.route.paramMap
    //   .subscribe(params => {
    //     console.log(params);
    //     // this.userName = 'dineshgopalchand';
    //     this.userName = params.get('username');
    //     this.getUserDetails();
    //   });
    // this.route.queryParamMap
    //   .subscribe(qParams => {
    //     console.log(qParams);
    //     qParams.get('pagenumber');
    //     const pagenumber = qParams.get('pagenumber');
    //     const count = qParams.get('count');
    //     // this.userName = 'dineshgopalchand';
    //     // this.userName = qParams.get('username');
    //     // this.getUserDetails();
    //   });
  }
  getUserDetails() {
    this.gitService.getUserDetails(this.userName)
      .subscribe((userData: any) => {
        this.userData = userData;
        console.log(this.userData);
      });
  }

  nextPage() {
    this.pagenumber = this.pagenumber + 1;
    this.router.navigate(['/git-followers/' + this.userName], {
      queryParams: {
        pagenumber: this.pagenumber,
        count: this.count
      }
    });
    console.log(this.pagenumber);
  }

}
