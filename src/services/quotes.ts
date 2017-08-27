import { Quotes } from '../data/quotes.interface';

export class QuotesService {
  private favoriteQuotes: Quotes[] = [];

  addToFavorites(quote: Quotes){
    this.favoriteQuotes.push(quote);
  }

  removeFromFavorites(quote: Quotes){
    const position = this.favoriteQuotes.findIndex(
      (quoteEl: Quotes) => {
        return quoteEl.id == quote.id;
      }
    );
    this.favoriteQuotes.splice(position, 1);
  }

  getFavorites(){
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quotes){
    return this.favoriteQuotes.find((quoteEl: Quotes) => {
      return quoteEl.id == quote.id;
    });
  }
}
