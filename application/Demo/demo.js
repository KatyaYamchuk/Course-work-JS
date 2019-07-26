import Hall from '../Classes/hall'	
import LocalStore from '../Singletons/LocalStore'

const Demo = () => {
	const numberOfRaws = 10;
	const base_price = 150;
	const numOfEconom = 3;
	const numOfVip = 1;

	const HallDiv = document.getElementById("hall");
	
	//LocalStore.remove();
	let store = localStorage.getItem('list-state');

  	if (store !== null){
  		let result = JSON.parse(store);	
		result.forEach( item => {
			LocalStore.add(item)
		})
	}

	const MyHall = new Hall(numberOfRaws, base_price, numOfEconom, numOfVip);
		MyHall.render();
}

export default Demo;