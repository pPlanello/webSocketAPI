const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        console.log(process.env.PORT);
        this.port = process.env.PORT;

        this.middlewares();

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Read and parse body
        this.app.use(express.json())
    }

    async connectDb() {
        await dbConnection();
    }

    routes() {
        this.app.use('/api/examples', require('../routes/examples.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running at port: ', this.port);
        });
    }
}

module.exports = Server;