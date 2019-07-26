import { Observable, Observer } from './Observer'
import SelectStore from '../Singletons/SelectTickets'
import Menu from '../Classes/menu'
import {MenudDiv} from '../Demo/DOM_varialbles'


let observable2 = new Observable();

let MenuObsCencel = new Observer( (obj) => {

 	let findSeat = SelectStore.AllTickets().find( (item) => {
 		return obj === item
 	})

 	SelectStore.removeOne(findSeat);
	new Menu().render();

	let findBtn = document.querySelector(`.Seats[data-id="${obj.numberRaw}.${obj.id}"]`);
		findBtn.classList.remove('buzy');

	if (SelectStore.AllTickets().length == 0){
		MenudDiv.innerHTML = `
		<p>Для продовження необхiдно обрати хоча б одне мiсце на схемi залу</p>
		`;
	}
});

observable2.addObserver( MenuObsCencel );

export default observable2;