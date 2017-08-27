import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Quotes } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotesGroup: {category: string, quotes: Quotes[], icon: string};

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private quoteService: QuotesService) {}

  ionViewDidLoad(){
    this.quotesGroup = this.navParams.data;
  }

  onAddToFavorites(quote: Quotes){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add it in your favorites?',
      buttons: [
        {
          text: 'Yes, I\'m sure!',
          handler: () => {
            this.quoteService.addToFavorites(quote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quotes){
    this.quoteService.removeFromFavorites(quote);
  }

  isFavorite(quote: Quotes){
    return this.quoteService.isQuoteFavorite(quote);
  }

}
