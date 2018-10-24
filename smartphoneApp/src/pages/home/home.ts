import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public latnow : number = null;
  public lonnow : number = null;

  constructor(public navCtrl: NavController){}
  
}