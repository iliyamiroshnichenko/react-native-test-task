const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

const fetchUserPosts = (userId = 1) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => response.json());
};

export default { fetchUsers, fetchUserPosts };
