const SaveUser = (name, email) => {
  const user = { name, email, role: "Buyer" };
  fetch("https://mobile-resell-bd-server-sarwarhridoy4.vercel.app/users", {
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
