import Fabrica from './fabrica'

class Hall {
	constructor(raws, base_prise, numOfEconom, numOfVip){
		this.raws = raws;
		this.base_prise = base_prise;
		this.numOfEconom = numOfEconom;
		this.numOfVip = numOfVip;
	}

	render() {
		for(let i = 1; i<= this.raws; i++){

			let raw = new Fabrica( {numberRaw:i, numRaws: this.raws, base_prise: this.base_prise},this.numOfEconom, this.numOfVip);
			raw.render();
		}

	}
}


export default Hall