var React = require('react');

var Map = React.createClass({
  componentDidMount(){
    // Only componentDidMount is called when the component is first added to
    // the page. This is why we are calling the following method manually.
    // This makes sure that our map initialization code is run the first time.

    this.componentDidUpdate();
  },
  componentDidUpdate(){
    if (this.lastLat == this.props.lat && this.lastLng == this.props.lng) {
      //The map is already been initializated at this addrees
      return;
    }
    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng;

    var map = new GMaps({
      el: "#map",
      lat: this.props.lat,
      lng: this.props.lng
    });

    map.addMarker({
      lat:this.props.lat,
      lng:this.props.lng
    });
  },

  render(){
    return (
      <div className="map-holder">
        <p>loading..</p>
        <div id="map"></div>
      </div>
      );
  }
});

module.exports = Map;
