import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController,AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.page.html',
  styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit {

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
  }
}
