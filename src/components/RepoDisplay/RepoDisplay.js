import './RepoDisplay.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RepoDetails from '../RepoDetails'

export default class Body extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired
  }

  render () {
    return (
      <div styleName='repo-display'>
        {
          this.props.repos.map((repo, index) => {
            return (
              <div styleName='repo-details' key={index}>
                <RepoDetails repo={repo} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
