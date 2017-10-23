const mongoose = require('../../utils').mongoose
const User = require('./model')

const actions = new mongoose.Actions(User, ['create', 'update', 'find', 'findOne', 'remove'])

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

const findOne = async (ctx, next) => {
  try {
    const data = await actions.findOne(ctx.params)
    if (!data) ctx.state.error = { name: 'NotFound' }
    else ctx.state.success = {type: 'loaded', data: Object.assign(data, {createdAt: data.createdAt.toString()})}
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

const update = async (ctx, next) => {
  try {
    const data = await actions.update(ctx.params, ctx.request.body, ['_id', '__v', 'createdAt'])
    if (!data) ctx.state.error = { name: 'NotFound' }
    else ctx.state.success = {type: 'updated', data}
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

const remove = async (ctx, next) => {
  try {
    const data = await actions.remove(ctx.params)
    if (!data) ctx.state.error = {name: 'NotFound'}
    else ctx.state.success = { type: 'removed', data }
  } catch (err) {
    ctx.state.error = err
  } finally {
    next()
  }
}

module.exports = {create, findAll, findOne, update, remove}
