import axios from 'axios';

export const signUpRegister = async (formData) => {
  try {
    const endpointSignUp = 'http://localhost:3000/auth/signup';

    const resData = await axios.post(endpointSignUp, formData);

    console.log('JWT Token', resData.data.token);
    return resData;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
  }
};

export const login = async (loginData) => {
  try {
    const endpointLogin = 'http://localhost:3000/auth/login';

    const resData = await axios.post(endpointLogin, loginData);

    console.log('JWT Token', resData.data.token);
    return resData;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
  }
};

export const getPosts = async () => {
  try {
    const endpointPosts = 'http://localhost:3000/posts';
    const resData = await axios.get(endpointPosts);

    return resData;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
  }
};
