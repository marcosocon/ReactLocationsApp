var React = require('react');

var Search = React.createClass({

  getInitialState(){
    return { value: ''};

  },

  handleChange(event){
    this.setState({value:event.target.value});

  },

  handleSubmit(event){
    event.preventDefault();
    //when a form is submitted call the onSearch callback that is passed to the component
    this.props.onSearch(this.state.value);

    //unfocus the text input field
    this.getDOMNode().querySelector('input').blur();
  },

  render(){
    return(
        <form id="geocoding-form" className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <div className="input-group">
                <input className="form-control" type="text" id="address" placeholder="find a location" value={this.state.value} onChange={this.handleChange} />
                <span className="input-group-btn">
                  <span className="glyphicon glyphicon-search" aria-hidden="true" ></span>
                </span>
              </div>
            </div>
          </div>
        </form>
      );
  }
});

module.exports = Search;
