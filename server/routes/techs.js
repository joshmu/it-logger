const express = require('express')
const router = express.Router()

const Tech = require('../models/Tech.js')

/**
 * @route   GET /api/techs
 * @desc    Get all techs
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const techs = await Tech.find({})
    res.json(techs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

/**
 * @route   POST /api/techs
 * @desc    Add new contact
 * @access  Public
 */
router.post('/', async (req, res) => {
  const { firstName, lastName, date } = req.body
  try {
    const newTech = new Tech({
      firstName,
      lastName,
      date
    })
    await newTech.save()
    res.json(newTech)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

/**
 * @route   PUT /api/techs/:_id
 * @desc    Update contact
 * @access  Public
 */
router.put('/:_id', async (req, res) => {
  const { firstName, lastName, date } = req.body

  // construct updateTech details
  const updateTech = {}
  if (firstName) updateTech.firstName = firstName
  if (lastName) updateTech.lastName = lastName
  if (date) updateTech.date = date

  try {
    // find original tech
    let tech = await Tech.findById(req.params._id)

    tech = await Tech.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { lean: true, new: true, upsert: true }
    )
    res.json(tech)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

/**
 * @route   DELETE /api/techs/:_id
 * @desc    Remove tech
 * @access  Public
 */
router.delete('/:_id', async (req, res) => {
  try {
    await Tech.findByIdAndRemove(req.params._id)

    res.json({ msg: 'Contact removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
