import { NaijaCurrencyFormat } from './factory-pattern/concrete-formats';
import CurrencyFormatterFactory from './factory-pattern/CurrencyFormatterFactory';

const currencyFormat = new NaijaCurrencyFormat();
const naijaCurrencyFormatter = CurrencyFormatterFactory.create(currencyFormat);

naijaCurrencyFormatter.format(20_000);
