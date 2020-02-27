import React from "react";
import ReactDOM from "react-dom";
import Map from "./components/Map";
import Header from "./components/Header";
import "./index.css";


class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            masksData: [],
        }
    }

    async componentDidMount() {
        // const masksData = await Masks.reloadMasksDatas();

        // this.setState({
        //     masksData: masksData.features
        // });
    }

    render() {
        return(
            <div>
                <Header/>
                <Map/>
            </div>
        );
    }
}

const index = document.getElementById('root');
ReactDOM.render(<Index/>, index);