import React from "react";

const Label = ({ clas, labelName, selectLabel, selected }) => {
	const labelStyle = {
		Personal: ` w-fit font-semibold text-white cursor-default font-normal text-xs border rounded-full px-5 py-2 bg-red-500 ${clas}`,
		Collage: ` w-fit font-semibold text-white cursor-default font-normal text-xs border rounded-full px-5 py-2 bg-blue-500 ${clas}`,
		Project: `w-fit font-semibold text-white cursor-default font-normal text-xs border rounded-full px-5 py-2 bg-purple-500 ${clas}`,
		FixBug: ` w-fit font-semibold text-white cursor-default font-normal text-xs border rounded-full px-5 py-2 bg-pink-500 ${clas}`,
		Design: ` w-fit font-semibold text-white cursor-default font-normal text-xs border rounded-full px-5 py-2 bg-indigo-500 ${clas}`,
		Healthy: ` w-fit font-semibold text-white cursor-default font-normal text-xs border rounded-full px-5 py-2 bg-green-500 ${clas}`,
		default: ` w-fit cursor-pointer font-normal text-xs border rounded-full px-5 py-2 border-slate-300 bg-white ${clas}`,
	};

	return (
		<button
			type="button"
			className={selected ? labelStyle[labelName] : labelStyle.default}
			onClick={() => selectLabel(labelName)}>
			{labelName}
		</button>
	);
};

export default Label;
