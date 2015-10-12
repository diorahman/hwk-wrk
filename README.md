## hwk-wrk

This is an example of attempting HTTP benchmark against an HTTP server using [wrk](https://github.com/wg/wrk); 
with requests protected by [hawk](https://github.com/hueniverse/hawk).

To generate the `Authorization`-header for each request, I use a node script then lua request streams it.

### play

Using the dummy server

```
$ npm install
$ npm start
```

Open a new tab

```
$ wrk -t12 -c400 -d30s -s request.lua http://localhost:8000/resource
```

Then examine the benchmark result

### license

MIT
