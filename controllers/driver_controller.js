const Driver = require('./../models/driver')

module.exports = {
  greeting (req, res) {
    res.send({ message: 'Hello' })
  },
  create (req, res, next) {
    const driverProps = req.body
    Driver.create(driverProps)
      .then((driver) => {
        res.send(driver)
      })
      .catch(next)
  }
}