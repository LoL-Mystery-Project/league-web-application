const fs = require('fs');

const getFileNames = () => {
  const files = fs.readdirSync('./').map(elem => {
    return { }
  })
}

console.log(getFileNames());