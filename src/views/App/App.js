import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Header from 'components/Header'
import Body from 'components/Body'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'

const mapStateToProps = state => ({
  user: state.user,
  repos: state.repos
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
  }

  componentDidMount () {
    const {getUser, getRepos} = this.props

    getUser()
    getRepos()
  }

  render () {
    return (
      <div styleName='app'>
        <Header />
        <Body user={this.props.user} repos={this.props.repos} />
      </div>
    )
  }
}
