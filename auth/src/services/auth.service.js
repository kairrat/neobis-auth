import axios from "axios"

const API_URL = 'https://users-auth-api.onrender.com/api';
const API_URL_SIGNUP = '/auth/signup';
const API_URL_SIGNIN = '/auth/signin';
const register = (username, email, password,age) => {
  return axios.post(API_URL + API_URL_SIGNUP, {
    username,
    email,
    password,
    age,
  }).then(()=> {

    alert('Пользователь успешно зарегистрирован')



  });
};

const login = (username, password) => {
  return axios
    .post(API_URL +  API_URL_SIGNIN, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));

      }
      
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};