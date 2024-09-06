import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=6");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=3");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=3");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="sm:h-[500px] h-[300px] flex justify-center opacity-95 items-center"
                key={listing._id}
              >
                <div className="flex flex-col gap-6 sm:mt-16">
                  <h1 className="text-white font-bold text-3xl sm:text-6xl">
                    Because house <span className="text-mixup"> hunting</span>{" "}
                    is
                    <br />
                    always a breeze !
                  </h1>
                  <div className="text-slate-300 hidden md:block sm:block font-serif text-xs sm:text-sm">
                    MyEstate: Why not just sell your house and live in a tent?
                    <br />
                    We will help you find one in a prime location!
                  </div>
                  <Link
                    to={"/search"}
                    className="text-lg text-mixup font-bold hover:underline"
                  >
                    Let's get started...
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto flex flex-col gap-4 p-3 flex-wrap my-6">
        {offerListings && offerListings.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-center pb-8 text-slate-600 font-serif">
              Recent offers
            </h2>
            <div className="flex sm:gap-10 gap-4 flex-wrap justify-evenly">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              className="text-sm text-blue-800 hover:underline"
              to={"/search?offer=true"}
            >
              <p className="text-center pt-3 sm:pt-5">Show more offers...</p>
            </Link>
          </div>
        )}

        <hr className="border-slate-300 shadow-2xl" />

        {rentListings && rentListings.length > 0 && (
          <div className="my-3">
            <div className="">
              <h2 className="text-2xl font-semibold font-serif pb-6 text-center text-slate-600">
                Recent places for rent
              </h2>
            </div>
            <div className="flex flex-wrap justify-evenly gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              className="text-sm text-blue-800 hover:underline"
              to={"/search?type=rent"}
            >
              <p className="text-center py-6">Show more places for rent...</p>
            </Link>
            <hr className="border-slate-300 shadow-2xl" />
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold font-serif pb-6 text-center text-slate-600">
                Recent places for sale
              </h2>
            </div>
            <div className="flex justify-evenly flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              className="text-sm text-blue-800 hover:underline"
              to={"/search?type=sale"}
            >
              <p className="text-center pt-5">Show more places for sale...</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
