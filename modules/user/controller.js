const mongoose = require('../../utils').mongoose
const User = require('./model')

const actions = new mongoose.Actions(User, ['create', 'update', 'find'])

const create = async (ctx, next) => {
  try {
    const data = await actions.create(new User(ctx.request.body))
    ctx.state.success = {type: 'created', data}
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

const findAll = async (ctx, next) => {
  try {
    const data = await actions.find({})
    ctx.state.success = {type: 'loaded', data}
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

const findOne= async (ctx, next) => {
  try {
    const data = await actions.findOne(ctx.params)
    ctx.state.success = {type: 'loaded', data}
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

const update = async (ctx, next) => {
  try {
    const data = await actions.update(ctx.params, ctx.request.body)
    ctx.state.success = {type: 'loaded', data}
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

const remove = async (ctx, next) => {
  try {
    const data = await actions.remove(ctx.params)
    ctx.state.success = {type: 'loaded', data}
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

module.exports = {create, findAll, findOne, update, remove}
