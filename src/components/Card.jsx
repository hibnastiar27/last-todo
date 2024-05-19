import React, { useState } from "react";
import { motion } from "framer-motion";

import DropIndicator from "./DropIndicator";
import Label from "./Label";

const Card = ({ title, id, column, labels, handleDragStart }) => {
	return (
		<>
			<DropIndicator beforeId={id} column={column} />
			<motion.div
				layout
				layoutId={id}
				draggable="true"
				onDragStart={(e) => handleDragStart(e, { title, id, column })}
				className="flex flex-col gap-2 cursor-grab rounded border border-neutral-200 bg-neutral-50 p-3 active:cursor-grabbing touch-none">
				<p className="text-sm text-neutral-700">{title}</p>

				<div className="flex gap-2 flex-wrap">
					{labels.map((label, index) => (
						<Label
							clas="text-[10px] py-0.5 px-4 "
							key={index}
							labelName={label}
							selected
						/>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default Card;
