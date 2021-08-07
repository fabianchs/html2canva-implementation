import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import React from "react";
import { useState } from "react";
import { Button, Input, Badge, Table } from "reactstrap";
import copyImg from "copy-image-clipboard";

const App = () => {
	const [create_image, setCreateImage] = useState("jelou");

	const onButtonClick = () => {
		let domElement = document.getElementById("my-node");
		htmlToImage
			.toPng(domElement)
			.then(function(dataUrl) {
				console.log(dataUrl);
				copyImg(dataUrl);
				setCreateImage(<img src={dataUrl}></img>);
				download(dataUrl, "image.jpeg");
			})
			.catch(function(error) {
				console.error("oops, something went wrong!", error);
			});
	};
	return (
		<div className="App bg-light w-50" id="my-node">
			<header className="App-header">
				<img
					src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
				<ul>
					<li>Comida</li>
					<li>cASA</li>
				</ul>
				<Table responsive bordered size="sm" className="text-center">
					<thead>
						<tr>
							<th>elemento</th>
							<th>elemento</th>
							<th>elemento</th>
						</tr>
					</thead>
				</Table>

				<br></br>
				<button onClick={onButtonClick}>Download as JPEG</button>
			</header>
			{create_image}
		</div>
	);
};

export default App;

//meter a la librería downloadjs y htmltoimage
