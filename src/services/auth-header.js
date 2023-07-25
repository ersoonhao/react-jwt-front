// auth-header.js
// auth.service.js (Authentication service)
// user.service.js (Data service)

// Adds HTTPS to request sent out

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }