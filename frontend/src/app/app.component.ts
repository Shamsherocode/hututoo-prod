import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Search',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Home',
      url: '/landing',
      icon: 'home'
    },
    {
      title: 'Rewards',
      url: '/rewards',
      icon: 'bookmarks'
    },
    {
      title: 'Wallets',
      url: '/wallets',
      icon: 'wallet'
    },
    {
      title: 'Transactions',
      url: '/transactions',
      icon: 'funnel'
    },
    {
      title: 'Activity List',
      url: '/activity',
      icon: 'list'
    },
    {
      title: 'Stream',
      url: '/stream',
      icon: 'chatbubble-ellipses'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'construct'
    }
    
  ];

  public userName ='';
  public userAvatar='assets/images/avatar-1.jpg';
  public loggedIn =false;
  constructor(
		public platform: Platform,
		private authService: AuthService,
		private navCtrl: NavController,
		private alertService: AlertService,
    private router: Router,
    ) {

      this.userName=this.authService.user().name
      this.userAvatar=this.authService.user().avatar
      console.log(this.authService.getToken())
      if(this.authService.getToken()) {
      this.loggedIn =this.authService.isLoggedIn;

      }

    this.handleSplashScreen()



  }




  // hide #splash-screen when app is ready
  async handleSplashScreen(): Promise<void> {
    try {
      // wait for App to finish loading
      await this.platform.ready()

    } catch (error) {
      console.error('Platform initialization bug')
    }
    const splash = document.getElementById('splash-screen')
    setTimeout(() => { splash.remove() }, 200)
  }


  login() {
    this.router.navigate(['/login'])
  }


  logout() {
    this.authService.logout()
    this.authService.isLoggedIn=false;
    this.navCtrl.navigateRoot('/dashboard');

  }


}
