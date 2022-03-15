import { CurrencyFormat } from '../concrete-formats';

export { NaijaCurrencyFormatter } from './NaijaCurrencyFormatter';
export { GhanianCurrencyFormatter } from './GhanianCurrencyFormatter';
export { GermanCurrencyFormatter } from './GermanCurrencyFormatter';

export interface CurrencyFormatter {
	readonly currencyFormat: CurrencyFormat;

	format(value: number | bigint): string;
}
