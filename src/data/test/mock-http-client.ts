import faker from '@faker-js/faker'

import { Authentication } from '@/domain/usecases/authentication'

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

// export const mockAuthenticationModel = (): Authentication.Model => mockAccountModel()

export class AuthenticationSpy implements Authentication {
  account = /* mockAuthenticationModel() */ {
    Model: {
      accessToken: faker.random.uuid(),
      name: faker.name.findName()
    }
  }
  params: Authentication.Params | undefined
  callsCount = 0

  async auth (params: Authentication.Params): Promise<any> {
    this.params = params
    this.callsCount++
    return this.account
  }
}