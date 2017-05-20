// server ports
const port = process.env.PORT || 3000;
// express routes and configurations
const app = require(`./server/routes`);
// starts listening on port
app.listen(port);
