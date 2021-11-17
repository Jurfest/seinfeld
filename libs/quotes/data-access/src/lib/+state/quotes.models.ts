/**
 * Interface for the 'Quotes' data
 */
export interface QuotesEntity {
  id?: string | number; // Primary ID
  name: string;
  author: string;
  episode: string;
  image: string;
  quote: string;
  season: string;
}
