import React, { useState, useEffect } from 'react';
import Link from "next/link";
import axios from "axios";

axios.defaults.headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;

export default function People() {
  const [people, setPeople] = useState<any[]>();

  useEffect(() => {
    axios.get('https://api.airtable.com/v0/appB1V2I4W0lblhpx/people/').then((response) => {
      const people = response.data.records;
      setPeople(people);
    }).catch(e => console.error(e));
  }, []);

  return people ? (
    <div className="py-16 px-5 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-16">
        {people.map((person, i) => (
          <Link href={`/${person.fields.Alias}`} key={i}>
            <div className="text-center cursor-pointer">
              <img className="w-48 rounded-full mx-auto" src={person.fields.Headshot ? person.fields.Headshot[0].url : "https://res.cloudinary.com/practicaldev/image/fetch/s--5-7FzLqj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/m6qy6j1v6i2slzgzqmlp.png"} alt="Picture" />
              <h3 className="text-4xl font-semibold mt-4">{person.fields.Name}</h3>
              {/* <p className="text-sm text-gray-400 mt-2">pronouns</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : <div></div>;
}

