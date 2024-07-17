import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {ParsedUrlQuery} from "node:querystring";

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = ({id}) => {
  return (
    <div>
      <Head>
        <title>Post {id}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <p>
          이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.
        </p>
        <p>
          {`/posts/${id}에 대응하는 페이지입니다`}
        </p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {id: '1'},
    },
    {
      params: {id: '2'},
    },
    {
      params: {id: '3'},
    }
  ]

  return {paths, fallback: false}
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({params}) => {
  return {
    props: {
      id: params!.id
    }
  }
}
export default Post