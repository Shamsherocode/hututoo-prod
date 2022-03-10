import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  public allDates: any = [];
  public allTransactions: any = [];
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
  ) {
  
  this.allDates=[
  { "date": "10 March 2022"},
  { "date": "8 March 2022"},
  { "date": "8 March 2022"},
  { "date": "5 March 2022"},
  { "date": "20 Feb 2022"},
  ]
this.allTransactions = [
    {
      "id": 1,
      "title": "100 points",
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      "type":'positive',
    },
    {
      "id": 1,
      "title": "100 points",
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      "type":'negative',
    },
    {
      "id": 1,
      "title": "50 points",
      "description": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      "type":'negative',
    },
    {
      "id": 1,
      "title": "50 points",
      "description": "Signup bonus...",
      "type":'positive',
    }
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
