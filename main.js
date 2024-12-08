

async function API(api) {
const getApi = await fetch(api);
const result = await getApi.json();
const { data } = result;

return {
  email(){
    data.forEach(({id , email}) => {

      console.log("email :" , email);
    })
  },
  id() {
    data.forEach(({id , email}) => {
      console.log("id :" ,  id);
    })},
    all() {
      data.forEach((data) => {
        console.log(data)
      })
    }

}

}

module.exports = { API }