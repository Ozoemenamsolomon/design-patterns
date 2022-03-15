import { CurrencyFormat } from './concrete-formats';

export default class CurrencyFormatterFactory {
	static create(countyFormat: CurrencyFormat) {
		return new Intl.NumberFormat(countyFormat.locale, {
			currency: countyFormat.currency,
			style: 'currency',
		});
	}
}
