// 下面这个全局变量中保存了一些有用的数据
let defaultOwner = {
  firstName: "Martin",
  lastName: "Fowler"
}
// 使用它的代码平淡无奇
const spaceship = {} as any;

spaceship.owner = defaultOwner;

// 更新这段数据的代码是这样的
defaultOwner = {
  firstName: 'Rebecca',
  lastName: 'Parsons'
}

