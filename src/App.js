import React, { Component } from "react";
import Map from './components/Map';

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
            <Map
                masksData={this.props.masksData}
                selectedMarker={(data) => this.selectedMarker(data)}
                info={this.state.info}
            />
        )
    }
}