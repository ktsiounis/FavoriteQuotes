import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { QuotesService } from '../../services/quotes';
import { Quotes } from '../../data/quotes.interface';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favoriteQuotes: Quotes[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService: QuotesService,
              private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.favoriteQuotes = this.quotesService.getFavorites();
  }

  onFavQuoteClick(quote: Quotes){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.quotesService.removeFromFavorites(quote);
        this.favoriteQuotes = this.quotesService.getFavorites(); 
      }
    })
  }

}
