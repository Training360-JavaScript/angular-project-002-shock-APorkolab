import { UserService } from 'src/app/service/user.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { User } from './model/user';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output()
  event!: KeyboardEvent;
  userService!: UserService;
  dataList: User[] = this.userService.list;
  currentUser!: User;
  title = 'The good Angular programmer';
  phrase: any;

  constructor() {}

  onUserClicked(): void {
    this.currentUser.emit(true);
  }

  onUpdateClicked(currentUser: User): void {
    this.userService.updateUser(currentUser);
  }
  onDeleteClicked(currentUser: User): void {
    this.userService.removeUser(currentUser);
  }
  onChangePhrase(event: KeyboardEvent): void {
    this.phrase = this.phrase;
  }
}
