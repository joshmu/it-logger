const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

// Connect to Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))
app.use(morgan('tiny'))

app.use('/api/techs', require('./routes/techs.js'))
app.use('/api/logs', require('./routes/logs.js'))

// Serve static assets in production (react) << make sure this is after other routes
if (process.env.NODE_ENV === 'production') {
  // Set static folder (react client build folder)
  app.use(express.static(path.join(__dirname, '..', 'build')))
  // Serve index.html file when any other route unspecified is hit
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  )
}

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
