import { UserService } from 'src/app/service/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './model/user';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The good Angular programmer';

  userData!: User[];
  currentUser: User = new User();

  constructor(private userService: UserService) {
    this.userData = this.userService.list;
  }
  onUserClicked(currentUser: User): void {
    this.currentUser = currentUser;
  }

  onUpdateClicked(currentUser: User): void {
    this.userService.updateUser(currentUser);
  }
  onDeleteClicked(currentUser: User): void {
    this.userService.removeUser(currentUser);
  }
}
