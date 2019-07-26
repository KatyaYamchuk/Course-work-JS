import Raw from './raw'

export class EconomRaw extends Raw {
	constructor( {numberRaw, base_prise} ){
		super(numberRaw);
		this.type = 'econom';
		this.k = 0.8
		this.price = base_prise*this.k;
		this.numOfSeats = 8;
	}
}

export class BaseRaw extends Raw {
	constructor( {numberRaw, base_prise} ){
		super(numberRaw);
		this.type = 'base';
		this.k = 1;
		this.price = base_prise*this.k;
		this.numOfSeats = 12;
	}
}

export class VipRaw extends Raw {
	constructor( {numberRaw, base_prise} ){
		super(numberRaw);
		this.type = 'vip';
		this.k = 1.5;
		this.price = base_prise*this.k;
		this.numOfSeats = 16;
	}
}
