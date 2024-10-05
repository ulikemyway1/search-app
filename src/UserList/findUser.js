export default function findUser(targetName, array) {
  if (!targetName || !Array.isArray(array) || targetName.length < 2) {
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
