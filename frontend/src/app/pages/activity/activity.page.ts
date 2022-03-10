import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  public allActivites: any = [];
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
  ) {
this.allActivites = [
    {
      "id": 1,
      "title": "Pridicted",
      "event": "Event Title",
      "event_id": 12,
      'time':'5 minutes ago ',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 2,
      "title": "Pridicted",
      "event": "Event Title",
      "event_id": 12,
      'time':'15 minutes ago ',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 3,
      "title": "Commented",
      "event": "Event Title",
      "event_id": 12,
      'time':'1 Hr ago',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 4,
      "title": "Pridicted",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 5,
      "title": "Pridicted",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 6,
      "title": "Commented",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 7,
      "title": "Commented",
      "event": "Event Title",
      "event_id": 12,
      'time':'Mar 7 at 10:26 PM ',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 5,
      "title": "Pridicted",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 6,
      "title": "Commented",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 7,
      "title": "Commented",
      "event": "Event Title",
      "event_id": 12,
      'time':'Mar 7 at 10:26 PM ',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 5,
      "title": "Pridicted",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 6,
      "title": "Commented",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 7,
      "title": "Commented",
      "event": "Event Title",
      "event_id": 12,
      'time':'Mar 7 at 10:26 PM ',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 5,
      "title": "Pridicted",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 6,
      "title": "Commented",
      "event": "Event Title",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
    {
      "id": 7,
      "title": "Commented",
      "event": "Event Title",
      "event_id": 12,
      'time':'Mar 7 at 10:26 PM ',
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?"
    },
  ]

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

  async showDetail(eventData) {
      this.router.navigate(['/event'])
  }




}
