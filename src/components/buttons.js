import React, { Component } from 'react'
import { addMatch } from '../actions/addMatch.js'
import { connect } from 'react-redux'

class Buttons extends Component {
	render() {
	<div>
 		<button className="like-dislike" onClick={this.props.likes} >Lets jam!</button>
		<button className="like-dislike" onClick={this.props.dislike} >Nah...</button>
	</div>

}

const mapStateToProps = state => {
  return {
    likes: state.likes,
  }
}
}

export default connect(mapStateToProps, { likes })(Buttons)
