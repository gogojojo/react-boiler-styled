import React from "react";

let AppContext;
const { Provider, Consumer } = AppContext = React.createContext();

class AppProvider extends React.Component {
	state = {
		data: '',
	};

	render() {
		return (
			<Provider
				value={{
					data: ''
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

export { AppProvider, Consumer as AppConsumer, AppContext };
