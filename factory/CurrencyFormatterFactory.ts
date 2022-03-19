import { CurrencyFormat } from './concrete-formats';

/**
 * @description use the static create funtion to get a currency formatter object
 */
export default class CurrencyFormatterFactory {
	/**
	 * @description returns a currency formatter based on the currency format provided
	 */
	static create(currencyFormat: CurrencyFormat) {
		return new Intl.NumberFormat(currencyFormat.locale, {
			currency: currencyFormat.currency,
			style: 'currency',
		});
	}
}
