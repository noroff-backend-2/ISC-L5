module.exports = {
    checkIfAuthorized: function(req, res, next) {
        if(req.user == null) {
            res.status(401).send(new Error());
            return;
        }
        if(req.user.role == "admin" || req.user.role == "customer")
            next();
    },
    isAdmin: function(req, res, next) {
        if(typeof req.user != 'undefined'){
            if(req.user.role === "admin") {
                next();
                return;
            }else{
                res.redirect('/login');
            }
        }else{
            // res.status(401).send(new Error());
            res.redirect('/login');
        }
    },
    checkCanOrder: function(req, res, next) {
        if(req.user == null) {
            res.status(401).send(new Error());
            return;
        }
        if(req.user.role == "customer")
            next();
    }
}