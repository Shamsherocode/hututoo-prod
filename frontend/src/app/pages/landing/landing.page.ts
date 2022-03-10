import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController,AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  public allEvents: any = [];
  public allCategory: any = [];
  public loggedIn=false;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 10,
    breakpoints: {
    600: {
      slidesPerView: 3.5,
    }

    }

  };

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
    public alertController: AlertController
  ) {
this.menu.enable(true);
  this.allCategory = [{
      "id": 1,
      "name":"Sports",
    },
    {
      "id": 2,
      "name":"Expiring",
    },
    {
      "id": 3,
      "name":"Finance",
    },
    {
      "id": 4,
      "name":"Elections",
    },
    {
      "id": 5,
      "name":"Fun",
    },
    {
      "id": 6,
      "name":"Bulletin",
    },
    {
      "id": 7,
      "name":"Trivia",
    }
  ]
  this.allEvents = [{
      "id": 1,
      "cate_id":1,
      "name": "Leanne Graham",
      'total_trading':110,
      'fav_percentage':90,
      'expires_in':'1Hr',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 2,
      "cate_id":2,
      "name": "Ervin Howell",
      'total_trading':140,
      'fav_percentage': 100,
      'expires_in':'1Hr',
      "description": "'Srivalli' song to cross 300M views by 5 Mar, 1 PM?"
    },
    {
      "id": 3,
      "cate_id":1,
      "name": "Clementine Bauch",
      'total_trading':310,
      'fav_percentage':20,
      'expires_in':'2Hr',
      "description": "Will GST collection be ₹ 1.4 lakh crore or more for Feb?"
    },
    {
      "id": 4,
      "cate_id":3,
      "name": "Patricia Lebsack",
      'total_trading':410,
      'fav_percentage':10,
      'expires_in':'2Hr',
      "description": "Temperature of Mumbai to be above 33°C at 03:00 PM on 28 February?"
    },
    {
      "id": 5,
      "cate_id":5,
      "name": "Chelsey Dietrich",
      'total_trading':150,
      'fav_percentage':60,
      'expires_in':'3Hr',
      "description": "NorthEast United to win against SC East Bengal?"
    },
    {
      "id": 6,
      "cate_id":6,
      "name": "Mrs. Dennis Schulist",
      'total_trading':210,
      'fav_percentage':40,
      'expires_in':'4Hr',
      "description": "Live Congestion of traffic in Bengaluru to be more than 34 % at 5:00 PM on 28 February? "
    },
    {
      "id": 7,
      "cate_id":6,
      "name": "Kurtis Weissnat",
      'total_trading':410,
      'fav_percentage':33,
      'expires_in':'4Hr',
      "description": "Will AAP's Bhagwant Mann win from Dhuri constituency in the upcoming Punjab elections?"
    },
    {
      "id": 8,
      "cate_id":3,
      "name": "Nicholas Runolfsdottir V",
      'total_trading':810,
      'fav_percentage':32,
      'expires_in':'5Hr',
      "description": "'Bheemla Nayak' to cross ₹120 crores box office collection in the first week of release?"
    },
    {
      "id": 9,
      "cate_id":7,
      "name": "Glenna Reichert",
      'total_trading':910,
      'fav_percentage':50,
      'expires_in':'6Hr',
      "description": "Maruti Suzuki total sales in February to be 155,200 units or more?"
    },
    {
      "id": 10,
      "cate_id":7,
      "name": "Clementina DuBuque",
      'total_trading':1000,
      'fav_percentage':70,
      'expires_in':'6Hr',
      "description": "Starting point for Ionic PWA Application with Authentication"
    }
  ]
  }


  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
         this.loggedIn =true;
      }else{
        this.loggedIn =false;
      }
    });
  }

  ngOnInit() {

  }

  async presentLoginConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oops!',
      message: 'You need to  <strong>Login</strong> to predict...',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {
            this.router.navigate(['/login'])
          }
        }
      ]
    });

    await alert.present();
  }


  async viewAllEvents(catId){
  //alert(catId)
  this.router.navigate(['/category'])

  }
  async pridictEvent(eventData) {
  console.log(eventData)
  if(this.authService.isLoggedIn){
  this.router.navigate(['/event'])
  }else{
  this.presentLoginConfirm()
   }

  }
}
