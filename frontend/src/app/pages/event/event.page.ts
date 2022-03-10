import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController,IonRouterOutlet } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PredictPage } from 'src/app/pages/event/predict/predict.page';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  public eventDetail: any = [];
  public allComments: any = [];
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
  ) {


  this.eventDetail = {
      "id": 1,
      "cate_id":1,
      "name": "Leanne Graham",
      'fav_count':90,
      'point':5,
      'unfav_count':10,
      'expires_in':'1Hr',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'pridicted':false,
    }

    this.allComments = [{
      "id": 1,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },{
      "id": 2,
      "author": "Leanne Graham",
      "slot":"start",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },{
      "id": 3,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },{
      "id": 4,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    }

  ]

  this.allComments.sort((a,b) => {
    return b.id - a.id;
});
  }


  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
      }else{
        this.router.navigate(['/login'])
      }
    });
  }

  ngOnInit() {

  }

 onSubmitComment(form: NgForm){
//alert(form.value.comment)
this.allComments.push({"id":this.allComments.length+1,"slot":"end", "comment":form.value.comment})

this.allComments.sort((a,b) => {
    return b.id - a.id;
});

form.reset();
 }



  async pridictEvent(option) {
    const modal = await this.modalController.create({
      component: PredictPage,
      cssClass: 'my-custom-modal',
      componentProps: {
      'event': this.eventDetail,
      'option': option
    },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }


}
