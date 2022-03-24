import faker from '@faker-js/faker'

import { RemoteAuthentication } from './remote-authentication'

describe("primeiro teste", () => {
  it("deve retornar true", () => {
    const remoteAuthentication = new RemoteAuthentication(
      "http://localhost:3000/login",
      {}
    )
    
    expect(true).toBe(true);
  });
})