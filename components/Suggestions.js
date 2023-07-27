import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function Suggestions() {
  const [sugesstions, setSugesstions] = useState([]);
  const createFakeUser = () => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    company: faker.company.name(),
    avatar: faker.internet.avatar(),
    message: faker.lorem.sentence(),
  });

  useEffect(() => {
    const sugesstions = Array.from({ length: 6 }, createFakeUser);
    setSugesstions(sugesstions);
    console.log(sugesstions);

    // Do something with the fakeUser data, like updating the component's state.
  }, []);

  return (
    <div className=" mt-4 ml-10">
      <div className=" flex justify-between text-sm mb-5">
        <h3 className=" text-sm font-bold text-gray-400">Suggestion for you</h3>
        <button className=" text-gray-600 font-semibold">See All</button>
      </div>
      {sugesstions.map((profile) => (
        <div
          key={profile.id}
          className=" flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            alt="pavan"
            className=" w-10 h-10 rounded-full border p-[2px]"
          />
         <div className=" flex-1 ml-4">
            <h2 className=" font-semibold text-sm">{profile.name}</h2>
            <h3 className=" text-xs text-gray-400">Works at {profile.company}</h3>
            
         </div>
         <button className=" text-blue-400 text-sm font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
