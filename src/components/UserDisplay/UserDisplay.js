import './UserDisplay.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import UserDetails from '../UserDetails'

export default class UserDisplay extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    return (
      <div styleName='user-display'>
        <a href={this.props.user.html_url}>
          <img
            styleName='avatar-image'
            src={this.props.user.avatar_url}
            alt='avatar-alt'
          />
        </a>
        <UserDetails user={this.props.user} />
      </div>
    )
  }
}
