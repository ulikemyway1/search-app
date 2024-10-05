import findUser from "./findUser";

describe("findUser", () => {
  const usersArray = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Jack", lastName: "Black" },
  ];

  it("should return an empty array if targetName is empty", () => {
    const result = findUser("", usersArray);
    expect(result).toEqual([]);
  });

  it("should return an empty array if array is not an array", () => {
    const result = findUser("John", "notAnArray");
    expect(result).toEqual([]);
  });

  it("should return users that match firstName", () => {
    const result = findUser("Jane", usersArray);
    expect(result).toEqual([{ firstName: "Jane", lastName: "Smith" }]);
  });

  it("should return users that match lastName", () => {
    const result = findUser("Doe", usersArray);
    expect(result).toEqual([{ firstName: "John", lastName: "Doe" }]);
  });

  it("should return users that match partially", () => {
    const result = findUser("Ja", usersArray);
    expect(result).toEqual([
      { firstName: "Jane", lastName: "Smith" },
      { firstName: "Jack", lastName: "Black" },
    ]);
  });

  it("should return an empty array if no users match", () => {
    const result = findUser("Nonexistent", usersArray);
    expect(result).toEqual([]);
  });

  it("should be case insensitive", () => {
    const result = findUser("joHN", usersArray);
    expect(result).toEqual([{ firstName: "John", lastName: "Doe" }]);
  });
});
