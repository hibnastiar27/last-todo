import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
// import Test from "./Test.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
