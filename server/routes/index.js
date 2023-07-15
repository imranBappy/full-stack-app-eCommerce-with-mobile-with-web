
const routes = [
    { path: '/auth', router: require('./authRoutes.js') },
    { path: '/products', router: require('./productRoute.js') },
    { path: '/dashboard', router: require('./dashboardRoute.js') },
    { path: '/category', router: require('./categoriesRoutes.js') },
    { path: '/brand', router: require('./brandRoute.js') },

]


const setRoutes = (app) => {
    routes.forEach(route => {
        app.use(route.path, route.router)
    })
}

module.exports = setRoutes;