const cookieValid = (req,res,next) =>{
    if (req.cookies.remember && req.cookies.cookieUser){
            req.session.usuario = req.cookies.cookieUser;
        }
        next();
    }
    
module.exports = cookieValid;