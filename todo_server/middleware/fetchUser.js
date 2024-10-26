const jwt = require('jsonwebtoken')
const jwt_key = 'mySecretKey'

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded_payload = jwt.verify(token, jwt_key)
        req.user = decoded_payload.user
        next()
    }catch (error) {
        // If verification fails, return an error response
        return res.status(401).json({ error: "Invalid or expired token." });
    }
    
}

module.exports = fetchUser