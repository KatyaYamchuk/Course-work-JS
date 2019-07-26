const SelectTickets = [];

const SelectStore = {
	add: item => SelectTickets.push(item),
	removeAll: () => SelectTickets.length = 0,
	AllTickets:() => [ ...SelectTickets ],
	removeOne: item => SelectTickets.splice(SelectTickets.indexOf(item), 1),
}

Object.freeze(SelectStore);

export default SelectStore