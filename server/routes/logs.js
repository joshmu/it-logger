const express = require('express')
const router = express.Router()

const Log = require('../models/Log.js')

/**
 * @route   GET /api/logs
 * @desc    Get all logs
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find({})
    res.json(logs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

/**
 * @route   GET /api/logs/:_query
 * @desc    Search Logs
 * @access  Public
 */
router.get('/:query', async (req, res) => {
  const regex = new RegExp(req.params.query, 'gi')
  try {
    const logs = await Log.find({
      $or: [{ message: regex }, { tech: regex }]
    }).lean()
    res.json(logs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

/**
 * @route   POST /api/logs
 * @desc    Add new contact
 * @access  Public
 */
router.post('/', async (req, res) => {
  const { message, attention, tech, date } = req.body

  try {
    const newLog = new Log({
      message,
      attention,
      tech,
      date
    })
    await newLog.save()
    res.json(newLog)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

/**
 * @route   PUT /api/logs/:_id
 * @desc    Update contact
 * @access  Public
 */
router.put('/:_id', async (req, res) => {
  const { message, attention, tech, date } = req.body

  // construct updateLog details
  const updateLog = {}
  if (message) updateLog.message = message
  if (attention) updateLog.attention = attention
  if (tech) updateLog.tech = tech
  if (date) updateLog.date = date

  try {
    const log = await Log.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { lean: true, new: true, upsert: true }
    )
    res.json(log)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

/**
 * @route   DELETE /api/logs/:_id
 * @desc    Remove log
 * @access  Public
 */
router.delete('/:_id', async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params._id)

    res.json({ msg: 'Contact removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
