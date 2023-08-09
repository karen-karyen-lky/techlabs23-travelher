const express = require ('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController')
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoals).pul(updateGoal)



module.exports = router