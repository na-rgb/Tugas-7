const fs = require('fs');

const logData = 'Ini adalah data log yang akan ditulis ke dalam file log.txt.\n';

fs.appendFile('log.txt', logData, (err) => {
  if (err) {
    console.error('Gagal menulis file log.txt: ', err);
  } else {
    console.log('Data log telah ditulis ke dalam file log.txt');
  }
});
