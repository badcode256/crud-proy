// @flow

import { FastifyInstance } from 'fastify'


const port = process.env.PORT || 3001

export const startHttpServer = async (fastify: FastifyInstance, controller: any) => {
  console.log('envs ', process.env.URL_SERVER)
  fastify.get('/home', async (request, reply) => {
    console.log(request)
    return await reply.status(200).send({ data: 'hello !!' })
  })
  fastify.get('/test', async (request, reply) => {
    await controller.test(request, reply)
    await reply

  })
  fastify.get('/get', async (request, reply) => {
    await controller.getData(request, reply)
    await reply

  })
  fastify.get('/delete/:id', async (request, reply) => {
    await controller.deteleData(request, reply)
    await reply

  })
  fastify.post('/create', async (request, reply) => {
    await controller.createData(request, reply)
    await reply

  })
  fastify.listen(port, String(process.env.URL_SERVER), (error) => {
    if (error != null) {
      fastify.log.error(error)
    }

    fastify.log.info(`HTTP server listening on  ${port}:${String(process.env.URL_SERVER)}`)
  })
  return fastify
}
