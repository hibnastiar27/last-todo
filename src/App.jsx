import React, { useEffect, useState } from "react";

import Column from "./components/Column";
import TempatSampah from "./components/TempatSampah";
import FormTodo from "./components/FormTodo";

import { dataCard } from "./data";

const App = () => {
	const [cards, setCards] = useState(
		JSON.parse(localStorage.getItem("tasks")) || dataCard || []
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(cards));
	}, [cards]);

	return (
		<div className="flex flex-col">
			<div className="p-12 ">
				<FormTodo setTasks={setCards} />
			</div>
			<div className="flex h-[calc(100vh-100px)] w-full gap-3 px-12 pb-12 overflow-x-scroll">
				<Column
					title="TODO"
					column="todo"
					headingColor="text-yellow-500"
					cards={cards}
					setCards={setCards}
				/>
				<Column
					title="Progres"
					column="doing"
					headingColor="text-blue-500"
					cards={cards}
					setCards={setCards}
				/>
				<Column
					title="Selesai"
					column="done"
					headingColor="text-emerald-500"
					cards={cards}
					setCards={setCards}
				/>
				<TempatSampah setCards={setCards} />
			</div>
		</div>
	);
};

export default App;
