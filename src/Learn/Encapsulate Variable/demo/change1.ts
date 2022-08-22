class Person {
  private _lastName: string
  private _firstName: string
  constructor(data) {
    this._lastName = data.lastName
    this._firstName = data.firstName
  }

  get lastName() {
    return this._lastName
  }

  get firstName() {
    return this._firstName
  }

}

defaultOwner = {} as any

// 这一部分我们封装成一个对象 defaultOwner.ts
function getDefaultOwner() {
  // return defaultOwner
  return new Person(defaultOwner)
}

function setDefaultOwner1(arg: any) {
  defaultOwner = arg
}

spaceship.owner = getDefaultOwner();

const newOwner = {
  firstName: 'Rebecca',
  lastName: 'Parsons'
}

setDefaultOwner1(new Person(newOwner))