import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router';

const Skill = ({skill}) => {
 const {
    skillName,
    providerName,
    providerImage,
    price,
    rating,
    slotsAvailable,
    image,
    category,
    location,
    availability,
  } = skill;

  return (
    <article className="max-w-md bg-base-100 rounded-2xl shadow-lg overflow-hidden ring-1 ring-neutral/6">
      <div className="relative">
        <img
          src={image}
          alt={`${skillName} cover`}
          className="w-full h-48 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-4 bottom-4 flex items-center gap-3">
          <img
            src={providerImage}
            alt={providerName}
            className="w-12 h-12 rounded-full ring-2 ring-white object-cover"
          />

          <div className="text-white">
            <h3 className="text-lg font-semibold leading-tight drop-shadow">{skillName}</h3>
            <p className="text-sm opacity-90">by {providerName}</p>
          </div>
        </div>

        <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
         
          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-md">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium ">{rating}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 opacity-80" />
            <div className="text-sm">
              <div className="font-medium">{location}</div>
              <div className="text-xs opacity-80">{category}</div>
            </div>
          </div>
 <span className="pb-2 font-bold text-orange-500 ">${price}</span>
        </div>


        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-neutral">
            <Clock className="w-4 h-4 opacity-80" />
            <div>
              <div className="font-medium">{availability}</div>
              <div className="text-xs opacity-80">{availability && 'Schedule'}</div>
            </div>
          </div>

          <Link to={`/viewDetails/${skill.skillId}`}
            
            className="btn btn-primary btn-sm rounded px-4 "
           >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Skill;
