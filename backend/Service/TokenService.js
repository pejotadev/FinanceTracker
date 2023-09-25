const jwt = require('jsonwebtoken');

export default {
  decodeToken: function (token) {
    const tokenWithoutBearer = token.replace('Bearer ', '');
    const decodedToken = jwt.decode(tokenWithoutBearer);
    return decodedToken;
  }
}