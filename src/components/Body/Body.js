import './body.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import UserDisplay from '../UserDisplay'
import RepoDisplay from '../RepoDisplay'

export default class Body extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
  }

  state = {}

  render () {
    return (
      <div styleName='body'>
        <UserDisplay user={this.props.user} />
        <RepoDisplay repos={this.props.repos} />
      </div>
    )
  }
}
