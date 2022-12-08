import { CustomerImplRepository } from '../../../domain/repository/customerImplRepository'

export class Controller {
    customerDb: CustomerImplRepository

    constructor(customerDb: CustomerImplRepository) {
        this.customerDb = customerDb;

    }
    async test(request: any, reply: any) {
        try {

            console.log('request-->', request.params)

            reply.code(200)
            reply.send({ status: 'success', msg: "servicio habilitado" })
        } catch (error) {
            console.log('error generar lastversion-->', error)


            reply.code(500)
            reply.send({ status: 'error', msg: error })
        }
    }

    async getData(request: any, reply: any) {
        try {
            console.log('request-->', request.params)
            const data = await this.customerDb.get({})

            if (data.length === 0) {
                reply.code(500)
                reply.send({ status: 'error', msg: `No se encontraron datos ` })
                return
            }

            reply.code(200)
            reply.send({ status: 'success', data: data })
        } catch (error) {
            console.log('error generar lastversion-->', error)


            reply.code(500)
            reply.send({ status: 'error', msg: error })
        }
    }
    async createData(request: any, reply: any) {
        try {
            const body = request.body
            const data = await this.customerDb.insertOne(body)

            console.log('data-->', data)

            reply.code(200)
            reply.send({ status: 'success', msg: "El registro se guardo correctamente" })
        } catch (error) {
            console.log('error generar lastversion-->', error)


            reply.code(500)
            reply.send({ status: 'error', msg: error })
        }
    }
    async deteleData(request: any, reply: any) {
        try {
            const id = request.params.id
            const data = await this.customerDb.deleteOne(id)
            console.log('delete-->', data)

            reply.code(200)
            reply.send({ status: 'success', msg: "El registro fue eliminado correctamente" })
        } catch (error) {
            console.log('error generar lastversion-->', error)


            reply.code(500)
            reply.send({ status: 'error', msg: error })
        }
    }
}