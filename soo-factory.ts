import {
	NaijaCurrencyFormatter,
	GhanianCurrencyFormatter,
	GermanCurrencyFormatter,
} from './factory-pattern/concrete-formatters';

const naijaCurrencyFormatter = new NaijaCurrencyFormatter();

naijaCurrencyFormatter.format(20_000);
