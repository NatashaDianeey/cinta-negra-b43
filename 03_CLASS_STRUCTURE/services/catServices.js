const Cat = require('../models/Cats')

module.exports = {
    createCat: (body) => {
        const newCat = new Cat(body) 
        return newCat.save();
    },
    getCats: () => Cat.find({ is_active: true }),
    getCat: (id) => Cat.findById(id),
    updateCat: (cat, body) => {
        Object.assign(cat, body);
        return cat.save();
    }
}