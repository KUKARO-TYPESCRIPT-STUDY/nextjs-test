import {NextPage} from "next";
import Image from "next/image";
import NextImage from '../public/next.svg'

const ImageSample: NextPage<void> = (props) =>{
  return (
    <div>
      <img src="/next.svg" alt="Next.svg" loading="lazy"/>
      <Image src={NextImage} alt="Next.svg"/>
    </div>
  )
}

export default ImageSample