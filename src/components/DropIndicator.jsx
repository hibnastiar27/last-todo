import React from "react";

const DropIndicator = ({ beforeId, column }) => {
	return (
		<div
			data-before={beforeId || "-1"}
			data-column={column}
			className="my-1 h-1 w-full bg-pink-500 opacity-0"
		/>
	);
};

export default DropIndicator;
