import { NaijaCurrencyFormat } from './factory/concrete-formats';
import CurrencyFormatterFactory from './factory/CurrencyFormatterFactory';

const currencyFormat = new NaijaCurrencyFormat();
const naijaCurrencyFormatter = CurrencyFormatterFactory.create(currencyFormat);

naijaCurrencyFormatter.format(20_000);
