import { useState } from "react";

export const useForm = (inititalState) => {
	const [values, setValues] = useState(inititalState);

	return [
		values,
		(e) => {
			setValues({
				...values,
				[e.target.name]: e.target.value,
			});
		},
	];
};