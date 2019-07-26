import {EconomRaw, BaseRaw,  VipRaw} from './rawsTypes';

class Fabrica{
	constructor(obj, numOfEconom, numOfVip){
		if (obj.numberRaw <= (obj.numRaws - obj.numRaws + numOfEconom)){
			return new EconomRaw( obj );
		}
		else if ( ( (obj.numRaws - obj.numRaws + numOfEconom) < obj.numberRaw ) && (obj.numberRaw <= obj.numRaws - numOfVip) )  {
			return new BaseRaw( obj );
		}
		else if (obj.numberRaw >=  obj.numRaws-numOfVip){
			return new VipRaw( obj );
		}
		else{
			return false;
		}
	}
}

export default Fabrica