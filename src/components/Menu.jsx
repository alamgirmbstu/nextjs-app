import React from "react";
import Head from "next/head";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <h2 className="text-2xl text-white font-bold">Assignment 12</h2>
            </a>
          </div>
          <div
            className={
              "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 block"
            }
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="text-white">
                <Link href="/about">About US</Link>
              </li>
              <li className="text-white">
                <Link href="/contact">Contact US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
