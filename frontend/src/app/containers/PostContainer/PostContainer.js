import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Breadcrumb, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {
  setSelectedCategory,
  unsetSelectedCategory,
} from 'app/redux/actions/CategoryActions'
import { handleFetchCategoryList } from 'app/redux/creators/CategoryActionCreator'
import { Loading } from 'app/components'
import {
  PostListContainer,
  PostDetailContainer,
  SetPostDialogContainer,
  EditCommentDialogContainer,
} from 'app/containers';

const styles = {
  breadcrumb: {
    marginBottom: '30px',
  }
}

class PostContainer extends Component {
  async componentDidMount () {
    await this.props.handleFetchCategoryList()
    this.updateSelectedCategory()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.categoryId !== this.props.match.params.categoryId) {
      this.updateSelectedCategory()
    }
  }

  handleCategoryChange = (event, data) => {
    this.props.history.push(`/${data.value}`)
  }

  updateSelectedCategory = () => {
    if (typeof(this.props.match.params.categoryId) !== 'undefined') {
      this.props.setSelectedCategory(this.props.match.params.categoryId)
    } else {
      this.props.unsetSelectedCategory()
    }
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
        <div>
          <Breadcrumb style={styles.breadcrumb}>
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
          <SetPostDialogContainer />
          <EditCommentDialogContainer />
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
    setSelectedCategory: (selectedCategory) => dispatch(setSelectedCategory(selectedCategory)),
    unsetSelectedCategory: () => dispatch(unsetSelectedCategory()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
