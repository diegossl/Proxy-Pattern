import ISubject from './ISubject'

class RealSubject implements ISubject {
  public request(): void {
    console.log('RealSubject: Handling request.')
  }
}

export default RealSubject