const orm = require("../config/orm.js");

const burger = {
    list: (callback) => {
        orm.selectAll("burgers", callback);
    },

    create: (data, callback) => {
        orm.insertOne("burgers", data, callback)
    },

    update: (data, id, callback) => {
        orm.updateOne("burgers", data, id, callback);
    },
    devour: (id, callback) => {
        orm.updateOne("burgers", {
            devoured: true
        }, id, callback);
    }

};

module.exports = burger;