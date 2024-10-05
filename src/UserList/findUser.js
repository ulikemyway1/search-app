export default function findUser(targetName, array) {
  if (!targetName) {
    return [];
  }
  if (!Array.isArray(array)) {
    return [];
  }

  const filteredUsers = [...array].filter((user) => {
    return (
      user.firstName.toLowerCase().includes(targetName.toLowerCase()) ||
      user.lastName.toLowerCase().includes(targetName.toLowerCase())
    );
  });
  return filteredUsers;
}
