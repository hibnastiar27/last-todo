import React, { useState } from "react";

import Label from "./Label";

import { dataLabel } from "../data";

const FormTodo = ({ setTasks }) => {
	const [taskData, setTaskData] = useState({
		title: "",
		id: "",
		labels: [],
		column: "todo",
	});

	const selectLabel = (label) => {
		if (taskData.labels.some((item) => item === label)) {
			const filterLabels = taskData.labels.filter((item) => item !== label);
			console.log(filterLabels);
			setTaskData((prev) => {
				return { ...prev, labels: filterLabels };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, labels: [...prev.labels, label] };
			});
		}
	};

	const checkLabel = (label) => {
		return taskData.labels.some((item) => item === label);
	};

	const ubahInput = (event) => {
		setTaskData((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});
	};

	const fromSubmit = (event) => {
		event.preventDefault();
		setTasks((prev) => {
			return [...prev, taskData];
		});
		setTaskData({
			column: "todo",
			title: "",
			id: Math.random().toString(),
			labels: [],
		});
	};

	return (
		<div className="">
			<form
				onSubmit={fromSubmit}
				className="flex flex-col gap-4 w-full justify-center items-center ">
				<div className="flex flex-col sm:flex-row sm:rounded-lg sm:w-full sm:justify-center">
					<input
						type="text"
						name="title"
						value={taskData.title}
						onChange={ubahInput}
						className="w-[400px] bg-gray-50 border-gray-300  text-gray-900 text-sm rounded-t-lg sm:rounded-none sm:rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border focus:outline-blue-500"
						placeholder="Tuliskan Todo Anda"
						required
					/>

					<select
						onChange={ubahInput}
						className="bg-gray-50  border-gray-300  text-gray-900 text-sm focus:border-blue-500 block p-2.5 border focus:ring-blue-500 dark:focus:border-blue-500"
						name="column">
						<option value="todo">Todo</option>
						<option value="doing">Progres</option>
						<option value="done">Selesai</option>
					</select>

					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-b-lg p-2.5 focus:ring-blue-300 font-medium sm:rounded-none sm:rounded-r-lg text-sm px-6">
						Tambah Todo
					</button>
				</div>

				<div className="flex gap-4">
					{dataLabel.map((label, index) => (
						<Label
							key={index}
							labelName={label}
							selectLabel={selectLabel}
							selected={checkLabel(label)}
						/>
					))}
				</div>
			</form>
		</div>
	);
};

export default FormTodo;
