import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title: string;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

 goToResults() {
   this.navCtrl.navigateForward(['/movies', this.title])
  }
}
