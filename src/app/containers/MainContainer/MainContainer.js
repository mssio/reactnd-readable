import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import { handleFetchCategoryList } from 'app/redux/creators/CategoryActionCreator'
import { PostListContainer, PostDetailContainer } from 'app/containers';
import { Menu, Container, Breadcrumb, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Loading } from 'app/components'
import './style.css'

class MainContainer extends Component {
  async componentDidMount () {
    await this.props.handleFetchCategoryList()
  }

  handleCategoryChange = (event, data) => {
    this.props.history.push(`/${data.value}`)
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

    return this.props.isLoading
      ? <Loading />
      : (
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
                  <Dropdown
                    onChange={this.handleCategoryChange}
                    placeholder='Select Category'
                    selection
                    options={this.props.categoryList.toJS()}
                    value={this.props.selectedCategory} />
                </Breadcrumb.Section>
              </Breadcrumb>
              { content }
            </Container>
          </div>
        )
  }
}

function mapStateToProps ({CategoryReducer}) {
  return {
    isLoading: CategoryReducer.get('isLoading'),
    categoryList: CategoryReducer.get('categoryList').map(cat => ({
      text: cat.name,
      value: cat.path,
    })),
    selectedCategory: CategoryReducer.get('selectedCategory'),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleFetchCategoryList: () => dispatch(handleFetchCategoryList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
