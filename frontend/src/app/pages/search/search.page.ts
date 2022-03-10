import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController,AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public allCategory: any = [];
  public allEvents: any = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
    600: {
      slidesPerView: 10,
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
      'fav_percentage':50,
      'expires_in':'1Hr',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    }
  ]



  }

 getRandomColor() {
  var r = () => Math.random() * 256 >> 0;
  return `rgba(${r()}, ${r()}, ${r()},0.4)`;
 }

  async pridictEvent(eventData) {
  if(this.authService.isLoggedIn){
  this.router.navigate(['/event'])
  }else{
  this.presentLoginConfirm()
  }

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

  ionViewWillEnter() {

  }

  ngOnInit() {

  }


}
