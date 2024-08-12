import { ApiContext, User } from '@/types/data'
import { fetcher } from '@/utils'

export type GetUserParams = {
  id: number
}

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    //TODO: 원래는 /\/$/g이렇게 되어있어서 에러나면 바꿔야함
    `${context.apiRootUrl.replace('//$/g', '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser
