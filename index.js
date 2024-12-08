const { API } = require('./main');




(async () => {
  const api =await API("https://reqres.in/api/users");
  api.email();
  api.id();
  api.all();

})();
