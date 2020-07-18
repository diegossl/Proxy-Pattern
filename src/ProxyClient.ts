import IClient from './IClient'
import Client from './Client'

class ProxyClient implements IClient {

  private cliente: Client = new Client()

  constructor() {
    console.log('Proxy has been initialized')
  }

  getData (): string {
    return this.cliente.getData()
  }
}

export default ProxyClient