const SaveUser = (name, email) => {
  const user = { name, email, role: "Buyer" };
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {});
};

export default SaveUser;
