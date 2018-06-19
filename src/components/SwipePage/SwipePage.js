import * as React from 'react'
import { connect } from 'react-redux'
import {musicians }from '../lib/musicians'

class SwipePage extends React.PureComponent {
  render() {
<div>'hi'</div>
  }
}

const mapStateToProps = (state) => {
musicians: state.musicians
}

export default connect(mapStateToProps)(SwipePage)


export default function Match(props) {
  return (<div>
        </div>)
}
development
