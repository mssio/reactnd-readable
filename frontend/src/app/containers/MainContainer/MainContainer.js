import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PostContainer, LoginDialogContainer } from 'app/containers';
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style.css'

class MainContainer extends Component {
  render () {
    const content = (
      <Switch>
        <Route exact path='/' component={PostContainer} />
        <Route path='/:categoryId' component={PostContainer} />
        <Redirect to='/404' />
      </Switch>
    )

    return (
      <div className='app'>
        <Menu size='massive' inverted attached>
          <Menu.Item link>
            <Link to='/'>Readable</Link>
          </Menu.Item>
        </Menu>
        <Container text className='readable-container'>
          { content }
          <LoginDialogContainer />
        </Container>
      </div>
    )
  }
}

export default MainContainer
