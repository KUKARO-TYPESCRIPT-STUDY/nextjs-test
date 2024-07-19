import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = ({message}: ISRProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>
          Create Next App ISR
        </title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <ol>
          <li>
            <Link href={'/ssr'}>
              Go TO SSR
            </Link>
          </li>
          <li>
            <Link href={'/ssg'}>
              Go TO SSG
            </Link>
          </li>
        </ol>
        <p>
          이 페이지는 ISR을 통해 생성된 페이지입니다.
        </p>
        <p>
          {message}
        </p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 이 페이지의 getStaticProps가 실행됐습니다`
  console.log(message)

  return {
    props: {
      message,
    },
    revalidate: 60,
  }
}

export default ISR