export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const res = await fetch(resource, init)
  if (!res.ok) {
    const errorRes = await res.json()
    throw new Error(
      errorRes.message ?? 'API 요청 중에 에러가 발생했습니다',
    )
  }
  return res.json()
}