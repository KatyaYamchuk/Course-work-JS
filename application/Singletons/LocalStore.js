const SoldSeats = [];

const LocalStore = {
	add: item =>  SoldSeats.push(item),
	setItemLocalSt: () => localStorage.setItem('list-state', JSON.stringify(SoldSeats)),
	isSold: (numberRaw, id) => {
		return SoldSeats.some( item => {
			if ( (item.numberRaw == numberRaw) && (item.id == id)){
				return true;
			}
		})
	},
	remove: () => localStorage.removeItem('list-state'),
}
Object.freeze(LocalStore);

export default LocalStore