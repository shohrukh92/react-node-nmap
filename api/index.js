const express = require('express');
const nmap = require('libnmap');
const middlewares = require('./middlewares');

const APP_PORT = process.env.PORT || 3500;
const app = express();
middlewares.setAppUseConfigs(app);

app.get('/scan', (req, res) => {
  nmapScan({
    range: ['tut.by'],
    ports: '80-443',
    flags: [
      '-v4',
      // '-A'
    ]
  })
    .then(data => res.json(data))
    .catch(() => res.json({}))
});

console.log(`Node app runs on port ${APP_PORT}`);
app.listen(APP_PORT);


function nmapScan({
  range = ['scanme.nmap.org'],
  flags = ['-T4'],
  ports = '1-1024',
  verbose = false
}) {
  /* flags
  '-T0', // Paranoid scan type; very slow but accurate
  '--max-retries 10', // Don't give up on slow responding hosts
  '--ttl 200ms', // Accomodate for slow connections by setting the packets TTL value higher
  '--scan-delay 10s', // Account for host 'rate limiting'
  '--max-rate 30', // Slows down packet spewing to account for IDS protections
  */
  return new Promise((resolve, reject) => {
    const opts = {
      nmap:       'nmap',
      blocksize:  16,
      udp:        false,
      json:       true,
      timeout:    900,
      verbose,
      ports,
      flags,
      range
    };
  
    nmap.scan(opts, function(err, report) {
      if (err) {
        // throw new Error(err);
        console.err(err);
        reject(err);
      }
  
      // for (let item in report) {
      //   console.log(JSON.stringify(report[item], null, 2));
      // }
      resolve(report);
    });
  });
}
