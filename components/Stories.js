import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";
function Stories() {
  const { data: session } = useSession();
  const [sugesstions, setSugesstions] = useState([]);
  const createFakeUser = () => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    avatar: faker.internet.avatar(),
    message: faker.lorem.sentence(),
  });

  useEffect(() => {
    const sugesstions = Array.from({ length: 30 }, createFakeUser);
    setSugesstions(sugesstions);


  }, []);
  return (
    <div className=" flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black ">
      {session && (
        <Story img={session.user.image} username={session.user.username}/>
      )}
      
      
      
      {sugesstions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.name} />
      ))}
      {/* story */}
    </div>
  );
}

export default Stories;
