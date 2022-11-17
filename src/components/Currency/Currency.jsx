import getCurrencyCources from "api/auth/currency";

const Currency = () => {
	getCurrencyCources().then(data => console.log(data));

	return <div>qq</div>;
};

export default Currency;
