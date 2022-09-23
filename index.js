const { send } = require('micro')
const url = require('url')

module.exports = function (request, response) {
  const { pathname } = url.parse(request.url)
  console.log(pathname)
  send(response, 200, 'Hello World! 👋')
}