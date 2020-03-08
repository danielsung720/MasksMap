import React, { Component } from "react";
import MapWithASearchBox from './components/MapWithASearchBox';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: '',
        }
    }

    selectedMarker(data) {
        this.setState({
            info: data
        });
    }


    render() {
        return (
            <MapWithASearchBox
                masksData={this.props.masksData}
                selectedMarker={(data) => this.selectedMarker(data)}
                info={this.state.info}
            />
        )
    }
}