const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

// const fetchUsersPosts = (userId) => {
//   return fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}/posts`
//   ).then((response) => response.json());
// };

export default { fetchUsers };
