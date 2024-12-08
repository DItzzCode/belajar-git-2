


async function* getApi() {
  const api = await fetch("https://reqres.in/api/users");
  const result = await api.json();
  const { data } = result;

const email = data.forEach(({email , id}) => {
  console.log("id :" , id)
  console.log("email :" , email);
  console.log("")
})

yield email;
}

(async () => {
const takeAPI = getApi();
console.log( await takeAPI.next());
})();

