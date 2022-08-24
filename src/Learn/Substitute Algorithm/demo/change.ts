function foundPerson_change(people: any): string {
  const candidates = ["Don", "John", "Kent"]
  return people.find((p: any) => candidates.includes(p) || "")
}