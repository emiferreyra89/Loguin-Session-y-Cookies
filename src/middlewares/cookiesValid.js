const cookieValid = (req,res,next) =>{
    if (req.cookies.cookieUser){
            req.session.usuario = req.cookies.cookieUser;
        } else {
            req.session.usuario = undefined
        }
        next();
    }

module.exports = cookieValid;