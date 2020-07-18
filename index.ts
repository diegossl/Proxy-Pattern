import Proxy from './src/Proxy'
import ISubject from './src/ISubject'
import RealSubject from './src/RealSubject'

function clientCode(subject: ISubject) {
  subject.request()
}

console.log('Client: Executing the client code with a real subject:')
const realSubject = new RealSubject()
clientCode(realSubject)

console.log('')

console.log('Client: Executing the same client code with a proxy:')
const proxy = new Proxy(realSubject)
clientCode(proxy)