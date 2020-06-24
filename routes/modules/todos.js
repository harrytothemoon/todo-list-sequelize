// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const db = require('../../models')
const Todo = db.Todo

// 定義路由
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then((todo) => { return res.render('detail', { todo: todo.toJSON() }) })
    .catch((error) => console.log(error))
})

// 匯出路由器
module.exports = router