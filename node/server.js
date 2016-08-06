const falcorExpress = require('falcor-express')
const Router = require('falcor-router')
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return new Router([{
    route: 'data',
    get: () => {
      return new Promise((resolve, reject) => {
        request
          .get('http://localhost:3000/designers', (req, res, body) => {
            resolve({
              path: ['data'],
              value: JSON.parse(body).data
            })
          })
      })
    }
  }])
}))

app.use(express.static(__dirname + '/'))

const server = app.listen(4000)
console.log('Server listening on port 4000')
