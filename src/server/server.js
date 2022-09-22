const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // sockets
        this.server = require('http').createServer( this.app );
        this.io = require('socket.io')(this.server); 

        this.middlewares();

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use(express.static(__dirname+'/../public'));

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
        this.server.listen(this.port, () => {
            console.log('Server running at port: ', this.port);
        });
    }
}

module.exports = Server;