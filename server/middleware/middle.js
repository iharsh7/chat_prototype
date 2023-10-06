const jwt = require("jsonwebtoken");
const User = require("../modals/userSchema");
const JWT_SECRET = "Helloandwelcometochatz"

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
   {
    try 
    {
      token = req.headers.authorization.split(" ")[1];
      const decoded = await jwt.verify(token, JWT_SECRET);
      
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } 
    catch (error) {
      res.status(401).json({message:"Error"});
      
    }
  }

  if (!token) {
    res.status(401);
    }
};

module.exports = { protect };