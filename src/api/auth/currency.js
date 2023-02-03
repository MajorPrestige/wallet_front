const getCurrencyCources = async () => {
	try {
		const { data } = await fetch("https://api.monobank.ua/bank/currency");
		return data;
	} catch (error) {
	}
};
getCurrencyCources();
export default getCurrencyCources;