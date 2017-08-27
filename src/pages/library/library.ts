import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Quotes } from '../../data/quotes.interface';
import quotes from '../../data/quotes';

import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quotesSelection: {category: string, quotes: Quotes[], icon: string}[];
  quotesPage = QuotesPage;

  ngOnInit(){
    this.quotesSelection = quotes;
  }

}
