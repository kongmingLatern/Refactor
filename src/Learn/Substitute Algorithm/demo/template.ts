function foundpeople(people: any): string {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === "Don") {
      return "Don"
    }
    if (people[i].name === "John") {
      return "John"
    }
    if (people[i].name === "Kent") {
      return "Kent"
    }
  }
  return ""
}