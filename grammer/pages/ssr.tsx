import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = ({message}: SSRProps) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <p>
          이 페이지는 서버 사이드 렌더링을 통해 생성된 페이지입니다.
        </p>
        <p>
          {message}
        </p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 이 페이지의 getServerSideProps가 실행됐습니다`
  console.log(message)
  console.log(context.req)

  return {
    props: {
      message
    }
  }
}

export default SSR