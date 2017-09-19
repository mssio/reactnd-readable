import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PostListContainer, PostDetailContainer } from 'app/containers';
import { Menu, Container, Breadcrumb, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style.css'

class MainContainer extends Component {
  componentDidMount () {
    console.log('Props from Main Container: ', this.props)
  }
  render () {
    const content = (
      <Switch>
        <Route exact path='/' component={PostListContainer} />
        <Route exact path='/:categoryId/:postId' component={PostDetailContainer} />
        <Route exact path='/:categoryId' component={PostListContainer} />
        <Redirect to='/404' />
      </Switch>
    )

    const categoryList = [
      {
        text: 'React',
        value: 'react',
      },
      {
        text: 'Redux',
        value: 'redux',
      },
      {
        text: 'Udacity',
        value: 'udacity',
      },
    ]

    return (
      <div className='app'>
        <Menu size='massive' inverted attached>
          <Menu.Item link>
            <Link to='/'>Readable</Link>
          </Menu.Item>
        </Menu>
        <Container text className='readable-container'>
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link to='/'>Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon='right angle' />
            <Breadcrumb.Section active>
              <Dropdown placeholder='Select Category' selection options={categoryList} />
            </Breadcrumb.Section>
          </Breadcrumb>
          { content }
        </Container>
      </div>
    )
  }
}

export default MainContainer
