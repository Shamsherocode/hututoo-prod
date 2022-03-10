import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.page.html',
  styleUrls: ['./stream.page.scss'],
})
export class StreamPage implements OnInit {
public allComments: any = [];
public selectedComment: any = [];
public showCommentBox=false;
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
  ) {

this.allComments = [{
      "id": 1,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":5,
      "comment_count":5

    },{
      "id": 2,
      "author": "Leanne Graham",
      "slot":"start",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":10,
      "comment_count":5
    },{
      "id": 3,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":10,
      "comment_count":5
    },{
      "id": 4,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":10,
      "comment_count":5
    },{
      "id": 1,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":10,
      "comment_count":5
    },{
      "id": 2,
      "author": "Leanne Graham",
      "slot":"start",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":10,
      "comment_count":5
    },{
      "id": 3,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":10,
      "comment_count":5
    },{
      "id": 4,
      "author": "Leanne Graham",
      "slot":"end",
      "thumbnail": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "comment": "Mukesh Ambani net worth to be at $87.4 B or more at 5 PM on 28 Feb?",
      'time':'Mar 7 at 10:26 PM ',
      "event_id": 12,
      "event": "Event Title",
      "like":10,
      "comment_count":5

    }

  ]

  this.allComments.sort((a,b) => {
    return a.id - b.id;
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

  async showOptions(data) {
  data.showOption=!data.showOption;
  }
  async hideOptions(data) {
  this.showCommentBox = false;
  }

  async showCommentTextBox(data) {
  this.showCommentBox =!this.showCommentBox
  }

  async addLike(data) {
  this.showCommentBox = false;
  data.like++
  }

  onSubmitComment(form: NgForm){

    this.allComments.push({"id":this.allComments.length+1,"slot":"end", "comment":form.value.comment})

    this.allComments.sort((a,b) => {
      return a.id - b.id;
    });

    form.reset();
 }


  ngOnInit() {

  }


}
