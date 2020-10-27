import React from "react";

class Nav extends React.Component {
  handleChange = (event) => {
    this.setState({
      result: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.result);
  };

  render() {
    return (
      <div>
        <div classname="logo-image" style={{ textAlign: "center" }}>
          <img
            style={{
              width: "150px",
              height: "150px",
              justifyContent: "center",
            }}
            src="https://www.experimentality.co/wp-content/uploads/2017/04/experimentalitycerebro.png"
            alt="youtube logo"
          ></img>
        </div>
        <div className="nav_bar">
          <form onSubmit={this.handleSubmit} className="ui_form">
            <div className="field">
              <label className="ui_label-search">Search Video</label>
              <input
                onChange={this.handleChange}
                className="ui_input-search"
                type="text"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
