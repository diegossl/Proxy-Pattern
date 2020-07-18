import ISubject from './ISubject'
import RealSubject from './RealSubject'

class Proxy implements ISubject {

  private realSubject: RealSubject

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request()
      this.logAccess()
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.')
    return true
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.')
  }
}

export default Proxy