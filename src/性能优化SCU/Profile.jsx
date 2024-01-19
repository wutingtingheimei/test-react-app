import { memo } from "react"


// memo 允许你的组件在 props 没有改变的情况下跳过重新渲染。 
// 是函数式组件用于判断props 和state变化是否需要渲染组件
const Profile = memo(function(props) {
  console.log('Profile render')
  return (
    <div>
      <h2>Profile: {props.message}</h2>
    </div>
  )
}
)


export default Profile