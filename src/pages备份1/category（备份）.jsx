import axios from 'axios'
import React, { PureComponent } from 'react'
import { changeBannersAction,changeRecommendAction } from '../store/actionCreators'
import { connect } from 'react-redux'
export class Category extends PureComponent {
  componentDidMount () {
    // 这部分应该在redux中操作，不应该放在某个组件
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.props.changeBanners(banners)
      this.props.changeRecommend(recommend)
    })
  }
  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> ({
  changeBanners: (banners)=> dispatch(changeBannersAction(banners)),
  changeRecommend: (recommend)=> dispatch(changeRecommendAction(recommend))
})

export default connect(null, mapDispatchToProps)(Category)