import React, { useState, useEffect } from 'react';
import axios from "axios";

axios.defaults.headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;

export default function Profiles() {
  const [people, setPeople] = useState();

  useEffect(() => {
    axios.get('https://api.airtable.com/v0/appB1V2I4W0lblhpx/people/').then((response) => {
      const people = response.data.records;
      setPeople(people);
    }).catch(e => console.error(e));
  }, []);

  return people && (
    <div className="py-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-5">
        {people.map((person, i) => (
          <div className="text-center" key={i}>
            <img className="w-48 rounded-full mx-auto" src="/pfp.jpeg" alt="Picture" />
            <h3 className="text-4xl font-semibold mt-4">{person.fields.Name}</h3>
            {/* <p className="text-sm text-gray-400 mt-2">pronouns</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

