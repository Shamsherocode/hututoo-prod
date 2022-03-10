import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-predict',
  templateUrl: './predict.page.html',
  styleUrls: ['./predict.page.scss'],
})
export class PredictPage implements OnInit {

  event: any;
  option:any;
  public selectdQty:number=10;
  public totalPoint=0;
  public potentialWin=0;

  constructor() {
    this.selectdQty = parseInt('1')
  }

  ngOnInit() {

  console.log(this.event)
  }

  addWQnatity(form: NgForm){
  console.log(parseInt(form.value.qunatity))
  if(parseInt(form.value.qunatity) >= 0){
  this.selectdQty= parseInt(form.value.qunatity)+1
  }else{
  this.selectdQty=0
  }
  }

  removeWunatity(form: NgForm){
  if(parseInt(form.value.qunatity) > 0){
  this.selectdQty= parseInt(form.value.qunatity)-1
  }else{
  this.selectdQty=0
  }
  }

  submitForm(form: NgForm){

  }



}
