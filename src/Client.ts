import IClient from './IClient'

class Client implements IClient {

  private data: string

  constructor() {
    console.log('Client has been initialized')
    this.data = 'Instagram'
  }
  
  getData (): string {
    return this.data
  }
}

export default Client