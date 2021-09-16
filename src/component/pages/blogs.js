import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
  
const Blogs = () => {
  const {loading, error, data} = useFetch('https://warm-gorge-65191.herokuapp.com/blogs')

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error..</p>
    console.log(data[0].foto.url)
    
  return (
    <div className="dark:bg-black">
      {data.map(blog =>{ console.log(blog.foto.url) 
      return (
      <div key={blog.id} className="blog">
        
      <section class="text-gray-600 body-font">
        
  <div class="container px-5 py-24 mx-auto max-w-7x1">
    <div class="flex flex-wrap w-full mb-4 p-4">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 dark:text-white">Blogs</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg">
          <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={blog.foto.url} alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">{blog.yazar} &nbsp; {blog.tarih}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{blog.baslik}</h2>
          <p class="leading-relaxed text-base">{blog.metin.substring(0,200)}...</p>
          <Link to={`/details/${blog.id}`}> 
          <button
        type="button"
        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
      >
        Devamını oku !
      </button></Link>
        </div>
      </div>
      
      
      
    </div>
  </div>
  
</section>
</div>
    )})}</div>
  );
};
  
export default Blogs;