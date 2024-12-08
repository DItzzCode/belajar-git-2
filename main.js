


(async () => {
  const api = await fetch("https://reqres.in/api/users");
  const result = await api.json();
  const { data } = result;

  data.forEach(({ email }) => {
    console.log("email : " , email)
  })
})();