import React from "react";

import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ subsets: ["latin"], weight: "400" });

function Footer() {
  return (
    <div>
      <footer className="pt-4">
        <div className="flex h-1/2 w-full flex-col items-start justify-around bg-footer p-20 md:flex-row">
          <div className="p-5">
            <ul>
              <p className={`logo ${pattaya.className}`}>MealMap</p>
              <div className="pb-5">
                <p>
                  &quot;on the other hand we trust, we denounce with <br />
                  righteous indignation and dislike men who are so <br />
                  beguiled and demoralized by the charm of <br />
                  pleasure of the moment &quot;
                </p>
              </div>
              <div className="flex gap-6 pb-5">
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.4 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.4-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.4-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.4 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.68 0 54.53A53.79 53.79 0 1 1 107.57 54.5c0 29.15-24.09 53.6-53.78 53.6zM447.9 448h-92.4V302.4c0-34.7-12.4-58.3-43.4-58.3-23.7 0-37.8 15.9-44 31.3-2.3 5.4-2.8 12.9-2.8 20.5V448h-92.4s1.2-261.5 0-288.6h92.4v40.9c-0.2 0.3-0.4 0.7-0.5 1h0.5v-1c12.3-19 34.2-46.2 83.3-46.2 60.9 0 106.6 39.7 106.6 125.1V448z" />
                  </svg>
                </span>
              </div>
            </ul>
          </div>

          <div className="p-5">
            <ul>
              <p className="font-bold text-gray-800">Product</p>
              <li className="pt-2 text-sm text-gray-500">Features</li>
              <li className="pt-2 text-sm text-gray-500">Integrations</li>
              <li className="pt-2 text-sm text-gray-500">Documentation</li>
              <li className="pt-2 text-sm text-gray-500">Pricing</li>
            </ul>
          </div>

          <div className="p-5">
            <ul>
              <p className="font-bold text-gray-800">Company</p>
              <li className="pt-2 text-sm text-gray-500">About Us</li>
              <li className="pt-2 text-sm text-gray-500">Careers</li>
              <li className="pt-2 text-sm text-gray-500">Partners</li>
              <li className="pt-2 text-sm text-gray-500">Privacy Policy</li>
            </ul>
          </div>

          <div className="p-5">
            <ul>
              <p className="font-bold text-gray-800">Contact</p>
              <li className="pt-2 text-sm text-gray-500">Contact Us</li>
              <li className="pt-2 text-sm text-gray-500">Support</li>
              <li className="pt-2 text-sm text-gray-500">FAQs</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-5 pt-5 text-center">
          <div className="text-sm text-gray-500">
            <p>MealMap © 2023. All rights reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
