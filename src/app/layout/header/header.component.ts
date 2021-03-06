import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus = [
    { name: 'Home', link: '' },
    { name: 'Post', link: '/post' },
    { name: 'Git followers', link: '/git-followers' },
    // { name: 'Git Profile', link: '/git-profile' },
    { name: 'Contact', link: '/contact' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
