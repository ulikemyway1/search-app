export default function transformDataBase(data) {
  const usersList = data.results;
  const transformedData = usersList.map((user) => {
    return {
      id: user.id.value,
      firstName: user.name.first,
      lastName: user.name.last,
      title: user.name.title,
      country: user.location.country,
      avatar_thumbnail: user.picture.thumbnail,
      avatar: user.picture.large,
      phone: user.phone,
      email: user.email,
      age: user.dob.age,
    };
  });

  return transformedData;
}
