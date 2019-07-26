import { Observable, Observer } from './Observer'
import Menu from '../Classes/menu'
import SelectStore from '../Singletons/SelectTickets'
import observable2 from '../Observers/observable2'

let observable = new Observable();

let MenuObsCheck = new Observer( (obj) => {
 	SelectStore.add(obj);
 	new Menu().render();

 	setTimeout( () => {
 		observable2.sendMessage(obj);
 	}, 60000);

 	let findBtn = document.querySelector(`.Seats[data-id="${obj.numberRaw}.${obj.id}"]`);
 		findBtn.classList.add('buzy');
 	//console.log("ObserveR111", obj);
 });

observable.addObserver( MenuObsCheck );


export default observable;