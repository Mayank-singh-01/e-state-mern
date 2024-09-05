import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]  ">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[230px] sm:h-[220] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="flex flex-col gap-2 w-full px-3 py-2">
          <p className=" truncate text-lg font-semibold font-serif text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 ">
            {listing.description}
          </p>
          <div className="flex justify-between items-center">
            <div className="text-slate-700 flex gap-4 ">
              <div className="font-bold flex gap-1 text-xs">
                <FaBed className="text-green-700 text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </div>
              <div className="font-bold gap-1 flex text-xs">
                <FaBath className="text-green-700 text-sm" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </div>
            </div>
            <p className="text-slate-500 pr-5 font-semibold ">
              $
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
