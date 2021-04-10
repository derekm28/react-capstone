import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class Capstone2Api{
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${Capstone2Api.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
      }

    static async getCurrentUser(username){
        let res = await this.request(`users/${username}`);
        return res.user;
    }

  //Save a shoe
  static async applyToJob(username, id){
    await this.request(`users/${username}/sneakers/${id}`, {}, 'post');
  }

  //Get token for login from username, password

  static async login(data){
    let res = await this.request(`auth/token`, data, 'post');
    return res.token;
  }

  static async signup(data){
    let res = await this.request(`auth/register`, data, 'post');
    return res.token;
  }

   //save user profile page

   static async saveProfile(username, data){
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }

}

Capstone2Api.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default Capstone2Api;
