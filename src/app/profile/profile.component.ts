import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  } from "module";
import { User } from '../user';
import { ShowProfileService } from '../show-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  [x: string]: any;
  user!: User;
  username!: string;
  repos: any;
  userProfile: any;
  followers: any;
  following: any;



  constructor(private showProfile: ShowProfileService) {
    this.showProfile = showProfile;
    this.usr = this.showProfile.user
    this.repo = this.showProfile.repo;
  }

  search(username: string) {
    this.showProfile.findUser(username);
    this.showProfile.getProfileData(username)
      .subscribe(profile => {
        
        this.userProfile = profile;
      }, error => {
        
      });
    this.username = '';
    this.showProfile.getRepoData(username)
      .subscribe(repos => {
        this.repos = repos;
      });
  }

  ngOnInit() {
    
    this.search('JAMAL-MOHAMED-JALDESA-2893');

  }

}



