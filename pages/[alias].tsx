import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import HeaderNav from "../components/HeaderNav";

axios.defaults.headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;

export default function ProfilePage() {
  const router = useRouter();
  const { alias } = router.query;

  const [person, setPerson] = useState<any>();

  useEffect(() => {
    axios.get('https://api.airtable.com/v0/appB1V2I4W0lblhpx/people/').then((response) => {
      const people = response.data.records;
      const person = people.filter((p: any) => p.fields.Alias === alias)[0];
      setPerson(person);
    }).catch(e => console.error(e));
  }, [alias]);

  return person && (
    <div
      className="py-24 px-5 min-h-screen"
      style={{ backgroundColor: "rgb(122,216,244)" }}
    >
      <div className="max-w-5xl mx-auto">
        <HeaderNav/>
        <h1 className="text-5xl font-bold">{person.fields.Name}</h1>
        {person.fields.Photos && (
          <div className="mt-10 h-64 flex items-center gap-x-10 overflow-scroll">
            {/* <img className="h-full rounded-full shadow-md" src={person.fields.Headshot[0].url} alt="headshot" /> */}
            {person.fields.Photos.map((photo: any, i: any) => (
              <img className="h-full shadow-md rounded-md" src={photo.url} alt="photo" key={i} />
            ))}
          </div>
        )}
        <p className="text-xl mt-10">{person.fields.Bio}</p>
      </div>
    </div>
  )
}

