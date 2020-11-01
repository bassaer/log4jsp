# log4jsp

```
❯ curl 'localhost:3000'
OK

❯ curl 'localhost:3000' -X POST -A 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
OK
```

```
❯ yarn start
yarn run v1.19.1
$ node ./dist/server.js
start: http://localhost:3000
[2020-11-01T15:21:03.626] [INFO] access - 127.0.0.1 - - "GET / HTTP/1.1" 200 2 "" "curl/7.64.1"
[2020-11-01T15:22:03.182] [INFO] access - 127.0.0.1 - - "POST / HTTP/1.1" 200 2 "" "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
```
