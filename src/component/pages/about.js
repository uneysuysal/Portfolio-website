import React from 'react';
import useFetch from '../../hooks/useFetch';
import Skills from './skills';

  
const About = () => {
  const {loading, error, data} = useFetch('https://warm-gorge-65191.herokuapp.com/abouts')

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error..</p>
  return (

    <div className="dark:bg-black flex mx-auto flex-col items-center h-screen">
      <div className="pb-5 dark:bg-black">
        <div className="dark:bg-black">

      {data.map(about =>(
      <header class="max-h-full bg-white dark:bg-black">
  <div class="md:px-52 mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40 dark:bg-black">
    <div class="grid justify-center items-center order-1 col-span-1 dark:bg-black">
      <img class="lg:h-80 md:h-64 h-40 rounded-full" src={about.foto.url} alt="" />
    </div>
    <div class="mt-8 md:mt-0 lg:justify-end col-span-2 dark:bg-black">
      <h1 class="text-4xl text-gray-800 dark:text-white text-center md:text-left font-bold mb-6">Merhaba, ben {about.isim}, {about.meslek}yim.</h1>
      <p class="text-xl text-gray-800 dark:text-white text-center md:text-left">{about.hakkinda}</p>
      <div className="flex justify-center dark:bg-black">
      <a class="mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-green-400" href={about.cv}>Download CV</a>
    </div></div>
  </div>
</header>
))}


</div><Skills/>

</div>
    </div>
  );
};
  
export default About;
