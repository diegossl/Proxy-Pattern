import ProxyClient from './src/ProxyClient'
import IClient from './src/IClient'

const proxyClient: IClient = new ProxyClient()
console.log(`Data from proxy client: ${proxyClient.getData()}`)