import React from "react";
import ReactDOM from "react-dom";
import ApiMasks from "./api/Masks";
import App from "./App";

import "./index.css";

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            masksData: [],
            masksDataSlice: [],
        }
    }

    async componentDidMount() {
        const masksData = await ApiMasks.reloadMasksDatas();

        this.setState({
            masksData: masksData.features,
            masksDataSlice: (masksData.features).slice(0,100),
        });
    }

    render() {
        return(
            <div>
                <App masksData={this.state.masksData}/>
            </div>
        );
    }
}

const index = document.getElementById('root');
ReactDOM.render(<Index/>, index);