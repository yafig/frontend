const middleware = {}

middleware['guest'] = require('../middleware/guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
