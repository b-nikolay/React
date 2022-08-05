import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {

      'API-KEY': '67a689c5-4d97-468b-a6ca-6c25b9d31a57',
    }
})


export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
    .get(`users?page=${currentPage}&count=${pageSize}`, )
    .then(response => response.data)
  },
  onFollow(userId) {
    return instance
    .post(`follow/${userId}`)
    .then(response => response.data)
  },
  onUnFollow(userid) {
    return instance
    .delete(`follow/${userid}`)
    .then(response => response.data)
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)
    .then(response => response.data);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}` )
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}` )
    .then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status} )
    .then(response => response.data);
  }
}

export const authAPI = {
   me() {
    return instance
    .get(`auth/me`)
  }
}

// export const profileAPI = {
//   getProfile(userId) {
//     return instance
//     .get(`profile/` + userId)
//     .then(response => {
//       this.props.setUserProfile(response.data)
//     });
//   }

// }



// export const unFollow= () => {
//   return axios
//   .get(`${baseUrl}auth/me`, { withCredentials: true })
//   .then(response => response.data)
// }

