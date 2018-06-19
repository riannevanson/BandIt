import * as React from "react";
import { connect } from "react-redux";

class Card extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        {" "}
        {this.props.musicians.map(musician => {
          return (
            <div>
              <h2>{musician.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    musicians: state.musicians
  };
};

export default connect(mapStateToProps)(Card);
