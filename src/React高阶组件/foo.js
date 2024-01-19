
// 回顾函数
function foo () {
  console.log('foo')
}
foo()

// 高阶函数
function foo2 (fn) {
  setTimeout(() => {
    fn()
  }, 1000);
}

foo2(function () {

})
// 高阶函数 map reduce filter forEach...
function foo3 () {
  function bar() {

  }
  return bar
}

const fn = foo3()



// 高阶组件是参数为组件，返回值为新组件的函数(本质是函数，函数的参数是组件，返回值是一个组件(HOC))