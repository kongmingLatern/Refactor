// 这一部分我们封装成一个对象 defaultOwner.ts
function getDefaultOwner() {
  return defaultOwner
}

function setDefaultOwner(arg: any) {
  defaultOwner = arg
}

spaceship.owner = getDefaultOwner();

setDefaultOwner({
  firstName: 'Rebecca',
  lastName: 'Parsons'
})