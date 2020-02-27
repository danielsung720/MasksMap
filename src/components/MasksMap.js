import React from "react";
import MyMapComponent from "./MyMap";

export default class MasksMap extends React.PureComponent {
  state = {
    isMarkerShown: true,
    masksDataMark: []
  }

  async componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({
        isMarkerShown: true,
      })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: true })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        masksDataMark={this.props.masksData}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}