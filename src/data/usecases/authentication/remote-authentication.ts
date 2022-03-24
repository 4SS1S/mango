/* eslint-disable no-useless-constructor */

import { HttpClient, HttpStatusCode } from "@/data/protocols/http/http-client";
import { Authentication } from "@/domain/usecases/authentication";


export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthentication.Model>
  ) {}

  async auth (params: Authentication.Params): Promise</*Authentication.Model*/ void> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

export class InvalidCredentialsError extends Error {}
export class UnexpectedError extends Error {}

export namespace RemoteAuthentication {
  export type Model = {
    username: string
    password: string
  }
}
