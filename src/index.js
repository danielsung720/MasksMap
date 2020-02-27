import React from "react";
import ReactDOM from "react-dom";
import ApiMasks from "./api/Masks"
import MasksMap from "./components/MasksMap";
import Header from "./components/Header";
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
            masksDataSlice: (masksData.features).slice(0,100)
        });
    }

    render() {
        console.log(this.state.masksDataSlice)
        return(
            <div>
                <Header/>
                <MasksMap
                    masksData={this.state.masksDataSlice}
                />
            </div>
        );
    }
}

const index = document.getElementById('root');
ReactDOM.render(<Index/>, index);