import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController,AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public allCategory: any = [];
  
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
      "background":this.getRandomColor()
    },
    {
      "id": 2,
      "name":"Expiring",
      "background":this.getRandomColor()
    },
    {
      "id": 3,
      "name":"Finance",
      "background":this.getRandomColor()
    },
    {
      "id": 4,
      "name":"Elections",
      "background":this.getRandomColor()
    },
    {
      "id": 5,
      "name":"Fun",
      "background":this.getRandomColor()
    },
    {
      "id": 6,
      "name":"Bulletin",
      "background":this.getRandomColor()
    },
    {
      "id": 7,
      "name":"Trivia",
      "background":this.getRandomColor()
    },
    {
      "id": 2,
      "name":"Expiring",
      "background":this.getRandomColor()
    },
    {
      "id": 3,
      "name":"Finance",
      "background":this.getRandomColor()
    },
    {
      "id": 4,
      "name":"Elections",
      "background":this.getRandomColor()
    },
    {
      "id": 5,
      "name":"Fun",
      "background":this.getRandomColor()
    },
    {
      "id": 6,
      "name":"Bulletin",
      "background":this.getRandomColor()
    },
    {
      "id": 7,
      "name":"Trivia",
      "background":this.getRandomColor()
    },
    {
      "id": 2,
      "name":"Expiring",
      "background":this.getRandomColor()
    },
    {
      "id": 3,
      "name":"Finance",
      "background":this.getRandomColor()
    },
    {
      "id": 4,
      "name":"Elections",
      "background":this.getRandomColor()
    },
    {
      "id": 5,
      "name":"Fun",
      "background":this.getRandomColor()
    },
    {
      "id": 6,
      "name":"Bulletin",
      "background":this.getRandomColor()
    },
    {
      "id": 7,
      "name":"Trivia",
      "background":this.getRandomColor()
    }
  ]
  
  }

 getRandomColor() {
  var r = () => Math.random() * 256 >> 0;
  return `rgba(${r()}, ${r()}, ${r()},0.4)`;
 }

  

  ionViewWillEnter() {

  }

  ngOnInit() {

  }


}
