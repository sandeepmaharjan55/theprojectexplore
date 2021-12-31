const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	
    const JWTPayload = {
        id: 'QktNdx8DEFDaYW3knjtC',
        role: 'frontendaccess',
        email: 'frontendaccessmail@projectxplore.com'
      };
      // sign Token
      jwt.sign(
        JWTPayload,
        process.env.FRONTEND_JWT_SECRET,
        {
          expiresIn: process.env.FRONTEND_SESSION_EXPIRES_IN, // session active duration
        },
        (err, token) => {
          if (!err) {
            const BearerToken = `Bearer ${token}`;
            req.token = BearerToken;
            // console.log(BearerToken);
			next();
        } else {
            return res.status(400).error("Cannot proceed");
        }
        }
      );
};
