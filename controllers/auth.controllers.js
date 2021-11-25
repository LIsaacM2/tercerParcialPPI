const JWT = require("jsonwebtoken");
const privateKey = "killmeplsr8now";


async function getjwtToken(req, res){
    
    ///Imaginar que hay una validaciÃ³n de usuario

    const payload = {
        userName: "cliente",
        exp: Date.now() + (60 * 1000) //Valida por treinta segundo

    };

    const tokenJwt = await JWT.sign(payload,privateKey, {algorithm: "HS256"});

    res.status(200).json({
        jwt:tokenJwt
    })

}

async function verifyToken(req,res,next){
    const authHeader = req.headers.authorization;

    if (authHeader){
        const authToken = authHeader.replace("Bearer ","").replace("bearer ","")
        try {
            await JWT.verify(authToken,privateKey)
            next();
        } catch (error) {
            res.status(401).send("Credeniales invalidas")
        }
    }else{
        res.status(401).send("Credeniales invalidas")
    }


}

module.exports = {
    getjwtToken,
    verifyToken
}