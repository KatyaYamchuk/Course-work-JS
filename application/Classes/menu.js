import observable2 from '../Observers/observable2'
import {MenudDiv} from '../Demo/DOM_varialbles'
import SelectStore from '../Singletons/SelectTickets'
import LocalStore from '../Singletons/LocalStore' 

class Menu{
	render(){

		let result = SelectStore.AllTickets().reduce( (sum, current)=> {
					return sum + current.price;
				 }, 0);

		MenudDiv.innerHTML = "";
		
		MenudDiv.innerHTML = `
			<div class='divTableHead'>
				<div class='menuRaw'>
					<div class="menuCell">Ряд</div>
					<div class="menuCell">Місце</div>
					<div class="menuCell">Ціна</div>
					<div class="menuCell"></div>
				</div>
			</div>
			<div class="divTableBody">
				${SelectStore.AllTickets().map( item => `
					<div class="menuRaw">
						<div class="menuCell">${item.numberRaw}</div>
						<div class="menuCell">${item.id}</div>
						<div class="menuCell">${item.price} грн.</div>
						<div class="menuCell"><button class="cencel" data-id="${item.numberRaw}.${item.id}">&#65794;</button></div>
					</div>
				`).join('')
				}
			</div>
			<div class="footer">
				<button id="basketBtn"><b>Придбати ${result} грн.</b></button>
			</div>
		`;

		SelectStore.AllTickets().forEach( item => {
			let btn = MenudDiv.querySelector(`.cencel[data-id="${item.numberRaw}.${item.id}"]`);
			btn.addEventListener('click', () => {
				observable2.sendMessage(item);
			})
		})
		
		let BasketBtn = document.getElementById("basketBtn");
			BasketBtn.addEventListener('click', () => {
				SelectStore.AllTickets().forEach( item => {
			 		let findBtn = document.querySelector(`.Seats[data-id="${item.numberRaw}.${item.id}"]`);
					findBtn.classList.remove('buzy');
					findBtn.classList.add('unvailable');
					
					LocalStore.add(item);
			 	})
			 	LocalStore.setItemLocalSt();
				SelectStore.removeAll();
				MenudDiv.innerHTML = `<p>Для продовження необхiдно обрати хоча б одне мiсце на схемi залу</p>`;
			})
	}
}

export default Menu