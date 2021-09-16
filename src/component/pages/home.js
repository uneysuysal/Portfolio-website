import React from "react";
import useFetch from "../../hooks/useFetch";
import { DiGithubBadge} from "react-icons/di";
import { SiLinkedin  } from "react-icons/si";
import { RiInstagramFill   } from "react-icons/ri";
import { AiFillTwitterCircle   } from "react-icons/ai";

export default function Home() {
  const {loading, error, data} = useFetch('https://warm-gorge-65191.herokuapp.com/homes')

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error..</p>
  return (
    <div className="dark:bg-black h-screen">
      
    {data.map(home =>(
      <div key={home.id} className="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">


        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black w-full dark:text-white">
            Merhaba, Ben {home.isim},
            <br className="hidden lg:inline-block dark:text-white" />{home.pozisyon}
          </h1>
          <p className="mb-8 leading-relaxed w-full dark:text-white">
            {home.bilgi}
          </p>
          <div className="flex justify-center items-center w-full">
          <a href="https://github.com/uneysuysal"
          className="text-black dark:text-white">
          <DiGithubBadge className="text-4xl"/></a>
          <a href="https://www.linkedin.com/in/cemilüneysuysal/"
          className="text-black dark:text-white">
          <SiLinkedin className="text-2xl"/></a>
          <a href="https://www.instagram.com/uneysuysal/"
          className="text-black dark:text-white">
          <RiInstagramFill className="text-3xl"/></a>
          <a href="https://twitter.com/"
          className="text-black dark:text-white">
          <AiFillTwitterCircle className="text-3xl"/></a>
          </div>
          <br/>
          <div className="flex justify-center w-full">
            <a
              href="/contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <br/>
            <a
              href="/project"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="code"
            src="img/code.gif"
          />
        </div>
        
      </div>
      </div>
      ))}
      </div>
    
  );
}
