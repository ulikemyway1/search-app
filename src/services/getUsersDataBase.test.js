import getUsersDataBase from "./getUsersDataBase";
import transformDataBase from "./transformDataBase";

global.fetch = jest.fn();

describe("getUsersDataBase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and transform data correctly", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        results: [
          {
            id: { value: "123" },
            name: { first: "John", last: "Doe", title: "Mr" },
            location: { country: "USA" },
            picture: { thumbnail: "thumbnail.jpg", large: "large.jpg" },
            phone: "123456789",
            email: "john.doe@example.com",
            dob: { age: 30 },
          },
        ],
      }),
    };

    fetch.mockResolvedValue(mockResponse);

    const data = await getUsersDataBase();

    expect(fetch).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=1000",
    );
    expect(mockResponse.json).toHaveBeenCalled();
    expect(data).toEqual([
      {
        id: "123",
        firstName: "John",
        lastName: "Doe",
        title: "Mr",
        country: "USA",
        avatar_thumbnail: "thumbnail.jpg",
        avatar: "large.jpg",
        phone: "123456789",
        email: "john.doe@example.com",
        age: 30,
      },
    ]);
  });

  it("should throw an error when fetch fails", async () => {
    const mockResponse = {
      ok: false,
    };

    fetch.mockResolvedValue(mockResponse);

    await expect(getUsersDataBase()).rejects.toThrow("Error fetching data");
  });
});
