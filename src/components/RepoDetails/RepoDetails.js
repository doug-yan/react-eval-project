import './RepoDetails.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ForkIcon from '../../assets/icons/fork.png'
import StarIcon from '../../assets/icons/star.png'

export default class RepoDetails extends Component {
  static propTypes = {
    repo: PropTypes.object.isRequired
  }

  getColor = (language) => {
    switch (language) {
      case 'JavaScript':
        return '#d7c938'
      case 'HTML':
        return '#b84c00'
      default: return 'black'
    }
  }

  render () {
    return (
      <a href={this.props.repo.html_url} style={{textDecoration: 'none'}}>
        <div styleName='repo-details-container'>
          <div styleName='repo-details-name'> {this.props.repo.name} </div>
          <div styleName='repo-details-right-side'>
            <div>
              <span styleName='stars-count'>{this.props.repo.stargazers_count}</span>
              <span><img styleName='pop-icon' src={StarIcon} alt='alt-star' /></span>
              <span styleName='forks-count'>{this.props.repo.forks_count}</span>
              <span><img styleName='pop-icon' src={ForkIcon} alt='alt-fork' /></span>
            </div>
            <div styleName='repo-details-right-side-language' style={{color: this.getColor(this.props.repo.language)}}>
              {this.props.repo.language ? this.props.repo.language : 'No Language'}
            </div>
          </div>
        </div>
      </a>
    )
  }
}
