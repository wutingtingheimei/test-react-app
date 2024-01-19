// import axios from 'axios'
import React, { PureComponent } from 'react'
import { fetchHomeMultidataAction } from '../store/features/home'
import { connect } from 'react-redux'
export class Category extends PureComponent {
  componentDidMount () {
    // 这部分应该在redux中操作，不应该放在某个组件
    // axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    //   const banners = res.data.data.banner.list
    //   const recommend = res.data.data.recommend.list
    //   this.props.changeBanners(banners)
    //   this.props.changeRecommend(recommend)
    this.props.fetchHomeMultidata()
    // })
  }
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>Category Page </h2>
        <span>Counter: {counter}</span>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> ({
  // changeBanners: (banners)=> dispatch(changeBannersAction(banners)),
  // changeRecommend: (recommend)=> dispatch(changeRecommendAction(recommend))
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction())
  }
})


const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)