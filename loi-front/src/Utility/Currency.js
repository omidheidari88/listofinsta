import Lang from './Lang';

class Currency {
	constructor() {
		this.lang = new Lang();
	}
	formatAsCurrency(input) {
		return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	formatToman(input) {
		return input === '' ? 'ثبت نشده ' : this.lang.persianNumbers(this.formatAsCurrency(input)) + ' تومان';
	}
	formatRial(input) {
		return input === '' ? 'ثبت نشده ' : this.lang.persianNumbers(this.formatAsCurrency(input * 10)) + '  ریال';
	}
}
export default Currency;
