import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setSelectedCategory,
  unsetSelectedCategory,
} from 'app/redux/actions/CategoryActions'
import { PostList } from 'app/components'

class PostListContainer extends Component {
  componentDidMount () {
    this.updateSelectedCategory()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.categoryId !== this.props.match.params.categoryId) {
      this.updateSelectedCategory()
    }
  }

  updateSelectedCategory = () => {
    if (typeof(this.props.match.params.categoryId) !== 'undefined') {
      this.props.setSelectedCategory(this.props.match.params.categoryId)
    } else {
      this.props.unsetSelectedCategory()
    }
  }

  render () {
    return (
      <PostList />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setSelectedCategory: (selectedCategory) => dispatch(setSelectedCategory(selectedCategory)),
    unsetSelectedCategory: () => dispatch(unsetSelectedCategory()),
  }
}

export default connect(null, mapDispatchToProps)(PostListContainer)
