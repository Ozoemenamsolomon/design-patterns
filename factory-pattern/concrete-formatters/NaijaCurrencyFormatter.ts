import { CurrencyFormatter } from '.';
import { NaijaCurrencyFormat } from '../concrete-formats';
import CurrencyFormatterFactory from '../CurrencyFormatterFactory';

export class NaijaCurrencyFormatter implements CurrencyFormatter {
	readonly currencyFormat = new NaijaCurrencyFormat();

	format(value: number | bigint) {
		return CurrencyFormatterFactory.create(this.currencyFormat).format(value);
	}
}
