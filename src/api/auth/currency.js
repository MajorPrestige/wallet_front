// const getCurrencyCources = async () => {
// 	try {
// 		const { data } = await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5");
// 		return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

const getCurrencyCources = async () => {
	try {
		const { data } = await fetch("https://api.monobank.ua/bank/currency");
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};
getCurrencyCources();
export default getCurrencyCources;

// https://api.monobank.ua/bank/currency