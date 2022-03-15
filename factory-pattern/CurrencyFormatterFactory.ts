import { CurrencyFormat } from './concrete-formats';

export default class CurrencyFormatterFactory {
	static create(currencyFormat: CurrencyFormat) {
		return new Intl.NumberFormat(currencyFormat.locale, {
			currency: currencyFormat.currency,
			style: 'currency',
		});
	}
}
