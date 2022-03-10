import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  public showAvatars=false;
  public selectedAvatar='assets/images/avatar-1.jpg';
  public sampleAvatars:any=[];
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
  ) {
      this.user = this.authService.user();
      this.sampleAvatars=[{
      'id':1,
      'name':'assets/images/avatar-1.jpg'
      },
      {
      'id':2,
      'name':'assets/images/avatar-2.jpg'
      },
      {
      'id':3,
      'name':'assets/images/avatar-3.jpg'
      },
      {
      'id':4,
      'name':'assets/images/avatar-4.jpg'
      },
      {
      'id':5,
      'name':'assets/images/avatar-5.png'
      },
      {
      'id':6,
      'name':'assets/images/avatar-6.png'
      },
      {
      'id':7,
      'name':'assets/images/avatar-7.png'
      },
      {
      'id':8,
      'name':'assets/images/avatar-8.png'
      },
      {
      'id':9,
      'name':'assets/images/avatar-9.png'
      },
      {
      'id':10,
      'name':'assets/images/avatar-10.png'
      }]
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

 async onFileChange(event){
    if (event.target.files && event.target.files[0]) {
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.selectedAvatar = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);  // to trigger onload
  }

  let fileList: FileList = event.target.files;
  let file: File = fileList[0];
  console.log(file);

 }
  async editAvatar(){
  this.showAvatars = !this.showAvatars
  }

  async selectAvatar(avatar){
  this.selectedAvatar =  avatar;
  }

  register(form: NgForm) {

  }



}
