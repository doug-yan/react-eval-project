import './UserDetails.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class UserInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    return (
      <div styleName='user-details'>
        <div styleName='user-details-name'> {this.props.user.name} </div>
        <div styleName='user-details-bio'>
          {
            this.props.user.bio
              ? this.props.user.bio.split(' • ').map((item, key) => {
                return <span key={key}>{item}<br /></span>
              })
              : ''
          }
        </div>
        <div styleName='user-details-repo'>
          <span styleName='user-details-repo-info'>
            <span styleName='user-details-repo-info-bold'>{this.props.user.public_repos}</span>
            <span> public repos</span>
          </span>
          <span styleName='user-details-repo-info'>
            <span styleName='user-details-repo-info-bold'>{this.props.user.public_gists}</span>
            <span> public gists</span>
          </span>
        </div>
      </div>
    )
  }
}
