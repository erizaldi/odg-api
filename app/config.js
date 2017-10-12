'use strict';


var config = module.exports;

config.db = {
    user: 'root',
    password: '',
    name: 'odgapi'
};

config.db.detail = {
    host: 'localhost',
    port: 8889,
    dialect: 'mysql'
};

config.keys = {
    secret: '/jVdfUX+u/Kn3qPY4+ahjwQgyV5UhkM5cdh1i2xhozE='
};

var userRoles = config.userRoles = {
    guest: 1, // ...001
    user: 2, // ...010
    admin: 4 // ...100
};

config.accessLevels = {
    guest: userRoles.guest | userRoles.user | userRoles.admin, // ...111 - Guest + user & admin
    user: userRoles.user | userRoles.admin, // ...110 - User & Admin
    admin: userRoles.admin // ...100 - Only Admin
};