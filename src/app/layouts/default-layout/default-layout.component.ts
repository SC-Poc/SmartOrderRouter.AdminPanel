import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  user: User;
  userInitials: string;

  constructor() { }

  ngOnInit(): void {

    this.user = {
      FirstName: 'First',
      LastName: 'Last',
      Email: 'email'
    };

    this.userInitials = (this.user.FirstName ? this.user.FirstName[0] : '') + (this.user.LastName ? this.user.LastName[0] : '');
  }

  logout() {

  }
}

export class User {
  FirstName: string;
  LastName: string;
  Email: string;
}
