import express from 'express';
import log4js from 'log4js';

const logger = log4js.configure({
    appenders: {
        access: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: ['access'],
            level: 'info'
        }
    }
}).getLogger('access');

const app = express();

app.use(log4js.connectLogger(logger, { level: 'info' }));

app.use('/', (req, res, next) => {
    res.send("OK");
    next();
});

const port = process.env.PORT || 3000;
app.listen(Number(port), '0.0.0.0', () => { console.log(`start: http://localhost:${port}`) });

