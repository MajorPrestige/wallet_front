const getCurrencyCources = async () => {
	try {
		const { data } = await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getCurrencyCources;
