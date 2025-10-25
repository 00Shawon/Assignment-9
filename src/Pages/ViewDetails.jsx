import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { Link, useLoaderData, useParams } from 'react-router';

import { FiMail, FiMapPin, FiClock, } from 'react-icons/fi'
import BookSession from './BookSession';


const ViewDetails = () => {
  const {id} = useParams();
  const allData = useLoaderData()
  const [data, setData] = useState({});
  useEffect(()=>{const skill = allData.find(data => data.skillId == id);
    setData(skill)
  },[allData,id])
  console.log(data)

  return (

  <main className="min-h-screen bg-gradient-to-tr from-white to-slate-50 p-6 md:p-12">
   
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 items-start">
        {/* Left column: hero image */}
        <section className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg bg-white">
          <div className="relative h-64 md:h-96">
            <img src={data.image} alt={data.skillName} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow">{data.skillName}</h1>
                <p className="mt-2 text-sm md:text-base max-w-prose">{data.description}</p>
              </div>
            </div>
            
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-between">
              <div className="flex items-center gap-4">
                <img src={data.providerImage} alt={data.providerName} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow" />
                <div>
                  <div className="text-sm text-slate-500">Instructor</div>
                  <div className="font-semibold">{data.providerName}</div>
                  <div className="text-xs text-slate-400">{data.category} • {data.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-extrabold">${data.price}</div>
                  <div className="text-xs text-slate-500">per session</div>
                </div>
                <div className="bg-slate-100 p-3 rounded-lg text-center">
                  <div className="flex items-center gap-2">
                    <FiStar /> <span className="font-medium">{data.rating}</span>
                  </div>
                  <div className="text-xs text-slate-500">{data.slotsAvailable} slots</div>
                </div>
              </div>
            </div>

      

           

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link to='/bookSession' className="btn btn-primary w-full">Book a session</Link>
              <button className="btn btn-outline w-full">Contact instructor</button>
            </div>

          
          </div>
        </section>

        {/* Right column: booking + details */}
        <aside className="sticky top-6 bg-white p-6 rounded-2xl shadow-lg self-start">
          <div className="flex flex-col items-center gap-3">
            <div className="text-sm text-slate-500">Availability</div>
            <div className="badge badge-outline">{data.availability}</div>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="flex items-center gap-3 text-sm">
              <FiMail />
              <div className="truncate">{data.providerEmail}</div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiMapPin />
              <div>{data.location}</div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiClock />
              <div>{data.slotsAvailable} slots available</div>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm text-slate-500">Choose date</label>
            <input type="date" className="input input-bordered w-full mt-2" />
          </div>

          <div className="mt-4">
            <label className="text-sm text-slate-500">Select time</label>
            <select className="select select-bordered w-full mt-2">
              <option>09:00 AM</option>
              <option>11:00 AM</option>
              <option>05:00 PM</option>
              <option>07:00 PM</option>
            </select>
          </div>

          <div className="mt-6 grid gap-3">
            <button className="btn btn-primary w-full">Reserve slot — ${data.price}</button>
            <button className="btn btn-ghost w-full">Message {data.providerName}</button>
          </div>

          <div className="mt-6 text-xs text-slate-400">
            <div>Secure payment • Instant confirmation • Cancel 24hrs in advance</div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ViewDetails;