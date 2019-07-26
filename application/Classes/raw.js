import {HallDiv} from '../Demo/DOM_varialbles'
import observable from '../Observers/observable'
import SelectStore from '../Singletons/SelectTickets'
import LocalStore from '../Singletons/LocalStore' 

class Raw {
	constructor(numberRaw, numOfSeats, type, price){
		this.numberRaw = numberRaw;
		this.numOfSeats = numOfSeats;
		this.type = type;
		this.price = price;
	}

	render(){
		let RawNode = document.createElement("div");
		RawNode.classList.add("RawStyle");
		HallDiv.appendChild(RawNode);

		for (let i = 1; i<= this.numOfSeats; i++){
			let NewSeat = new Place(this.numberRaw, i, RawNode, this.type, this.price);
			NewSeat.render();
		}
	}

}

class Place extends Raw{
	constructor(numberRaw, id, node, type, price)	{
		super(numberRaw, type, price);
		this.numberRaw = numberRaw;
		this.id = id;
		this.node = node;
		this.type = type;
		this.price = price;
	}
	
	render(){
		let flag = LocalStore.isSold(this.numberRaw, this.id);

		let div = document.createElement("div");
			if (flag === false){
				div.className = 'Seats available';
			}else{
				div.className = 'Seats unvailable';
			}
			
			if (this.id%4 == 0){
				div.classList.add('indentRight');
			}

			if ((this.id%2 == 0) && this.type =="vip"){
				div.classList.add('indentRight');
			}

			div.classList.add(`${this.type}`);
			div.dataset.id = `${this.numberRaw}.${this.id}`;
		
		this.node.appendChild(div);

		div.addEventListener('click', (e) => {

			if (SelectStore.AllTickets().length >8){
				alert("Ви не можете обрати більше ніж 9 місць!")
			} else{
				observable.sendMessage(this);
			}
		})
	}
}

export default Raw

