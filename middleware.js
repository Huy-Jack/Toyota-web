



module.exports.isLoggedIn = (req, res, next) =>{
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/admin/login');
    }
    next();
}