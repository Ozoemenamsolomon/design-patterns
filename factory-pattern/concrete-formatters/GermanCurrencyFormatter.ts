import { CurrencyFormatter } from '.';
import { CurrencyFormat, GermanCurrencyFormat } from '../concrete-formats';
import CurrencyFormatterFactory from '../CurrencyFormatterFactory';

export class GermanCurrencyFormatter implements CurrencyFormatter {
	readonly currencyFormat = new GermanCurrencyFormat();

	format(value: number | bigint): string {
		return CurrencyFormatterFactory.create(this.currencyFormat).format(value);
	}
}
