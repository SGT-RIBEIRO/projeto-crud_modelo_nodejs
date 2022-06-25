const TaskCon = require("../models/tasks")

module.exports = class TaskController {

    //Criando e salvando uma tarefa
    static createTask(req, res) {
        res.render('task/create')
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        await TaskCon.create(task)

        res.redirect('/task')
    }

    //Removendo uma tarefa
    static async removeTask(req, res) {
        const id = req.body.id

        await TaskCon.destroy({where: {id: id}})

        res.redirect('/task')

    }

    //Editando uma tarefa específica
    static async updateTask(req, res) {
        const id = req.params.id

        const task = await TaskCon.findOne({ where: { id:id }, raw: true})

        res.render('task/edit', {task})
    }

    static async updateTaskPost(req, res) {
        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description
        }

        await TaskCon.update(task, {where: {id:id}})

        res.redirect('/task')

    }

    //Alterando o status da tarefa
    static async toggleTaskStatus(req, res) {
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false
        }

        await TaskCon.update(task, {where: {id:id}})

        res.redirect('/task')
    }

    //Listando todas as tarefas
    static async showTasks(req, res) {
        const tasks = await TaskCon.findAll({raw:true})
        res.render('task/all', {tasks})
    }

}