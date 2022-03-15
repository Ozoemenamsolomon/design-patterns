export { GermanCurrencyFormat } from './GermanCurrencyFormat';
export { GhanianCurrencyFormat } from './GhanianCurrencyFormat';
export { NaijaCurrencyFormat } from './NaijaCurrencyFormat';

export interface CurrencyFormat {
	locale: string;
	currency: string;
}
