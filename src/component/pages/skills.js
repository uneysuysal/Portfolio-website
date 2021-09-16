import React from "react";
import useFetch from "../../hooks/useFetch";

export default function Skills() {
  const { loading, error, data } = useFetch("https://warm-gorge-65191.herokuapp.com/skills");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error..</p>;
  return (
    <div className="">
      <hr className="bg-black dark:bg-white" />
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold dark:text-white" >Skills</h1>
      </div>
      <br />

      <div className="flex justify-center gap-10 flex-wrap ">
        {data.map((skill) => (
          <div key={skill.id} className="">
            <img src={skill.svg} width="80" height="80" />
          </div>
        ))}
      </div>
    </div>
  );
}
