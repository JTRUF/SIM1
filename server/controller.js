module.exports = {
    get: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.get_inventory([params])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())
    },
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price, imageurl} = req.body;

        dbInstance.create_product([name, price, imageurl])
            .then(() => res.status(200).send())
            .then(() => res.status(500).send())
    }
}