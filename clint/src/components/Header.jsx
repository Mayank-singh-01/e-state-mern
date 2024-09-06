import React from 'react';
import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState,useEffect } from 'react';

export default function Header() {

  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTerm = urlParams.get("searchTerm");
    if (searchTerm) {
      setSearchTerm(searchTerm);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl text-mixup whitespace-nowrap mx-2">
            <span className="text-slate-500">My</span>
            <span className="">Estate</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent focus:outline-none flex-grow sm:flex-grow-0 w-full sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-0 sm:gap-5 font-bold text-lg font-serif">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 cursor-pointer hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 cursor-pointer hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="rounded-full h-8 w-8 object-cover"
              />
            ) : (
              <li className=" text-slate-700 cursor-pointer hover:underline whitespace-nowrap mx-2">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
