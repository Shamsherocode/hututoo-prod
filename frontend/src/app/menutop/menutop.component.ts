import { Component, OnInit } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-menutop',
  templateUrl: './menutop.component.html',
  styleUrls: ['./menutop.component.scss'],
})
export class MenutopComponent implements OnInit {
  
  public userName='';
  public userAvtar='';
  public isLoggedIn=false;
  public userDefaultAvatar='assets/images/avatar-1.jpg';
  public appPages = [
    {
      title: 'Dash',
      url: '/landing',
      icon: 'library'
    },
    {
      title: 'Rewards',
      url: '/wallets',
      icon: 'gift'
    },
    {
      title: 'Wallets',
      url: '/wallets',
      icon: 'wallet'
    },
    {
      title: 'Transactions',
      url: '/transactions',
      icon: 'cash'
    },
    {
      title: 'Activity List',
      url: '/activity',
      icon: 'finger-print'
    },
    {
      title: 'Stream',
      url: '/stream',
      icon: 'footsteps'
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'chatbubble-ellipses'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    }
    
  ];
  
  constructor(
		private authService: AuthService,
		private navCtrl: NavController,
		private router: Router,
		private menu: MenuController,
		private storage: Storage
		){ 
		
		 this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				this.userName = this.authService.userName;
				this.isLoggedIn = this.authService.isLoggedIn;
			}
     	});
		
		}
 
 
  ngOnInit() {
   this.userName = this.authService.userName;
   this.isLoggedIn = this.authService.isLoggedIn;
  }
  
  
  
  login() {
    this.router.navigate(['/login'])
  }
  
  logout() {
    this.authService.logout()
    this.authService.isLoggedIn=false;
    this.userName = 'Guest'
    this.isLoggedIn=false;
    this.navCtrl.navigateRoot('/dashboard');
    

  }

}
