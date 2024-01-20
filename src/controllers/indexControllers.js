const {validationResult} = require('express-validator');

const indexControllers = {

    home: function(req, res, next) {
        res.render('index', { title: 'Express',usuario: req.session.usuario });
      },

    proccesHome: function(req, res, next) {
        const errores = validationResult(req)
        
        if(!errores.isEmpty()){
            res.render('index', { title: 'Express', errors:errores.mapped(), oldData:req.body });
        }

        let user = req.body
        req.session.usuario = user
    
        if(user.remember){  
            res.cookie('cookieUser', user, {maxAge:1000*60})
            res.cookie('remember',user.remember,{maxAge:1000*60} )
        }
        
        res.render('index', { title: 'Express', usuario: req.session.usuario });
      },

    pageEnd: function(req, res, next) {
        res.render('page-end', { title: 'Fin', usuario: req.session.usuario });
    },

    logout:(req,res) => {
        res.clearCookie('cookieUser')
        req.session.destroy()
        return res.redirect('/')
    }
}

module.exports = indexControllers