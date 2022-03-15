import { CurrencyFormatter } from '.';
import { GhanianCurrencyFormat } from '../concrete-formats';
import CurrencyFormatterFactory from '../CurrencyFormatterFactory';

export class GhanianCurrencyFormatter implements CurrencyFormatter {
	readonly currencyFormat = new GhanianCurrencyFormat();

	format(value: number | bigint) {
		return CurrencyFormatterFactory.create(this.currencyFormat).format(value);
	}
}
