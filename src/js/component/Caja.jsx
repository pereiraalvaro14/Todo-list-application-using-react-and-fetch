import React, { useState, useEffect } from "react";
const Caja = () => {
	const [inputText, setInputText] = useState("");
	const [table, setTable] = useState([]);

	useEffect(() => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pereiraalvaro14",
			{
				method: "GET",
			}
		).then((response) => {
			if (response.status == 404) {
				createDbIfNotExist();
			} else {
				getDb();
			}
		});
	}, []);

	const addText = (text) => {
		let newText = [...table, { label: text, done: false }];
		console.log(newText);
		setTable(newText);
		updateDb(newText);
	};

	const handleKey = (e) => {
		if (
			e.key === "Enter" &&
			inputText !== " " &&
			inputText !== "" &&
			!table.includes(inputText)
		) {
			addText(inputText);
			setInputText("");
		}
	};
	const DeleteItems = (indexItem) => {
		// let newTable = setTable((prevState) =>
		// 	prevState.filter((f, index) => index !== indexItem)
		// );
		let newTable = table.filter((t, i) => i !== indexItem);
		setTable(newTable);
		updateDb(newTable);
	};

	const getDb = () => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pereiraalvaro14",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((resp) => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				setTable(data);
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};
	const updateDb = (table) => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pereiraalvaro14",
			{
				method: "PUT",
				body: JSON.stringify(table),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};
	const deleteDb = () => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pereiraalvaro14",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
		getDb();
	};
	const createDbIfNotExist = () => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/pereiraalvaro14",
			{
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};

	return (
		<div className="container-fluid">
			<div className="input">
				<input
					type="text"
					onKeyPress={(e) => {
						handleKey(e);
						// console.log(e);
					}}
					onChange={(event) => {
						setInputText(event.target.value);
						// console.log(event.target.value);
					}}
					name=""
					id=""
					value={inputText}
				/>
			</div>
			<div>
				<table className="table">
					<ul>
						{table.length > 0 &&
							table.map((t, index) => (
								<li
									key={index}
									className="list-group-item index">
									{t.label}
									<button
										className="btn DelItem"
										onClick={() => DeleteItems(index)}>
										<i className="fas fa-times" />
									</button>
								</li>
							))}
						<tr className="badge bg-light text-dark me-2">
							Total Todo List: {table.length}
						</tr>
					</ul>
				</table>
				<button onClick={() => deleteDb()}>Delete List</button>
			</div>
		</div>
	);
};
export default Caja;
