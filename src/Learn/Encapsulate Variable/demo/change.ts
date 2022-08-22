defaultOwner = {} as any
// 这一部分我们封装成一个对象 defaultOwner.ts
function getDefaultOwner1() {
  // return defaultOwner
  return Object.assign({}, defaultOwner)
}

function setDefaultOwner(arg: any) {
  defaultOwner = arg
}

spaceship.owner = getDefaultOwner1();

setDefaultOwner({
  firstName: 'Rebecca',
  lastName: 'Parsons'
})