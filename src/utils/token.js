import jwt from "jsonwebtoken";

const Token = ( id) =>{
    return jwt.sign({id}, "abc123")

}

export default Token;