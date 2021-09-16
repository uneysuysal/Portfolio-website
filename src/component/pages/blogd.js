import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../../hooks/useFetch'

export default function Blogd() {
    const { id } = useParams()
    const {loading, error, data} = useFetch('https://warm-gorge-65191.herokuapp.com/blogs/' + id)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error..</p>
    console.log(data.foto.url)
    return (
<article class="py-12 px-4 dark:bg-black">
  <h1 class="text-4xl text-center mb-4 font-semibold font-heading font-semibold dark:text-white">{data.baslik}</h1>
  <p class="text-center dark:text-white">
    <span>{data.tarih}</span>
    <a class="ml-1 text-green-500 hover:underline" href="#">{data.yazar}</a>
  </p><div class="max-w-3xl mx-auto">
  <img src={data.foto.url} />
  </div>
  <br/>
  <div class="max-w-3xl mx-auto dark:text-white">
    <p class="mb-4">{data.metin}</p>
    </div>
</article>
    )
}
