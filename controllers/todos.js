// import model
const{ Todo } = require('../models')

class TodoController {
    static async findAll(req, res) {
        let todos = await Todo.findAll()
        res.status(200).json({status: 'sukses', data: todos})
    }

    static async store(req, res) {
        //dapetin data melalui request
        let task = req.body.task
        let dueDate = req.body.dueDate

        //simpan melalui model Todo
        //cara 1 menggunakan instace
        // let newtodo = Todo.build({task: task, dueDate: dueDate})
        // console.log(newtodo instanceof Todo) // true
        // await newtodo.save()

        //cara 2 gunakan metode create
        const todo1 = Todo.create({task: task, dueDate: dueDate})
        res.status(201).json({status : 'sukses ', message : 'todo is saved!'})
    }

    static async show(req, res) {
        let id = req.params.id
        // let todo = await Todo.findAll({
        //     where : {
        //         id : id
        //     },
        //     limit : 1
        // })
        let todo = await Todo.findByPk(id)
        res.status(200).json({status : 'sukses', data : 'todo is saved!'})

    }

    static async update(req, res) {
        let task = req.body.task
        let dueDate = req.body.dueDate
        await Todo.update({
            task : task,
            dueDate : dueDate
        }, {
            where: {
            id : req.params.id
        }
        })

        res.status(200).json({status : 'sukses', data : 'Updated!'})

    }

    static async destroy(req, res) {
        await Todo.destroy({
        where: {
            id: req.params.id
            }
        })

        res.status(200).json({status : 'sukses', data : 'Deleted!'})
    }


}

module.exports = TodoController