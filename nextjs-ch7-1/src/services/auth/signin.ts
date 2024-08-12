import { ApiContext, User } from '@/types/data'
import { fetcher } from '@/utils'

export type SigninParams = {
  /**
   * 사용자명
   * @example 'user'
   */
  username: string
  /**
   * 비밀번호
   * @example 'password'
   */
  password: string
}

/**
 * 인증 API(로그인)
 * @param context API 콘텍스트
 * @param params
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
