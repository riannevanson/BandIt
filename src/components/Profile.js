import * as React from "react";
import { connect } from "react-redux";
import * as logic from "../lib/logic";
import { newCard } from "../actions/swipe";
import img1 from "../lib/images/1.png";
import { profileForm } from "../actions/NewBand";

class Profile extends React.PureComponent {
  state = {
    name: "",
    genre: "",
    skillLevel: "",
    picture: img1
  };

  handleProfileUserNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleProfileGenreChange = event => {
    this.setState({ genre: event.target.value });
  };
  handleProfileSkillLevelChange = event => {
    this.setState({ skillLevel: event.target.value });
  };
  submitProfile = () => {
    this.props.profileForm(
      this.state.name,
      this.state.genre,
      this.state.skillLevel
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="cardContainer">
        <div className="card">


<h2>Change your profile</h2>
          <div className="textualContent">
            <label>name</label>

            <input onChange={this.handleProfileUserNameChange} type="text" />
            <br />

            <label>genre</label>
            <input onChange={this.handleProfileGenreChange} type="text" />
            <br />
            <label>skillLevel</label>
            <input onChange={this.handleProfileSkillLevelChange} type="text" />
            <button onClick={this.submitProfile}>Submit</button>
          </div>
          <h3>your profile</h3>
          <div className=" textualContent">
            <div className="input"> name: {this.state.name} </div>
            <div className="input"> genre: {this.state.genre} </div>
            <div className="input"> skilllevel: {this.state.skillLevel} </div>
          </div>
        </div>

        {/* <button onClick={this.activeCard}>Next Match</button> */}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    musicians: state.musicians,
    randomUser: state.newCard,
    newBand: state.NewBand
  };
};

export default connect(mapStateToProps, { profileForm })(Profile);
