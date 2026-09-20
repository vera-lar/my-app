'use client';

import {
  faSearch, faUser, faHome, faEnvelope, faTimesCircle, faMessage, faGear, faSmile, faBell,
  faPlus, faCoffee, faFish, faTaxi, faTicket, faLaptopCode, faMusic, faLessThan, faGreaterThan, faPeopleGroup, faBook,
  faGamepad, faBurger,
  faAsterisk, faCreditCard, faWallet, faChartLine, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const PaymentCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const transactions = [
    { id: 1, icon: faFish, name: 'Fish & chips', time: '23:02', amount: -78.36, date: '28 may 2026' },
    { id: 2, icon: faCoffee, name: 'People love', time: '11:09', amount: -13.99, date: '28 may 2026' },
    { id: 3, icon: faTaxi, name: 'Yandex', time: '13:00', amount: -5.99, date: '28 may 2026' },
    { id: 4, icon: faCoffee, name: 'People love', time: '10:20', amount: -3.99, date: '28 may 2026' },
    { id: 5, icon: faBurger, name: 'Burger & salad', time: '11:00', amount: -23.25, date: '28 may 2026' },
    { id: 6, icon: faTicket, name: 'Films tickets', time: '12:00', amount: -13.99, date: '28 may 2026' },
    { id: 7, icon: faLaptopCode, name: 'Computer training', time: '08:00', amount: -200.99, date: '28 may 2026' },
    { id: 8, icon: faMusic, name: 'Music class', time: '12:00', amount: -113.99, date: '28 may 2026' },
    { id: 9, icon: faGamepad, name: 'Fortnite, Epic Game', time: '12:00', amount: -113.99, date: '28 may 2026' },
    { id: 10, icon: faBook, name: 'Meeting', time: '12:00', amount: -113.99, date: '28 may 2026' },
    { id: 11, icon: faPeopleGroup, name: 'Events', time: '12:00', amount: -113.99, date: '28 may 2026' },
    { id: 12, icon: faUser, name: 'Users', time: '12:00', amount: -113.99, date: '28 may 2026' },
  ];

  const categories = [
    { name: 'Supermarkets', color: 'bg-purple-600' },
    { name: 'Restaurants', color: 'bg-amber-400' },
    { name: 'Entertainments', color: 'bg-green-600' },
    { name: 'Transport', color: 'bg-red-700' },
    { name: 'Transport', color: 'bg-red-700' },

  ];

  const secondaryCategories = [
    { name: 'Drinks', color: 'bg-green-600' },
    { name: 'Foods', color: 'bg-red-700' },
    { name: 'Taxi', color: 'bg-green-600' },
    { name: 'Carsharing', color: 'bg-red-700' },
    
  ];
  const someFunction = () => {
    console.log('Function called');
    alert('Function called');
  };



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* BODY */}
      <div className="flex flex-1 relative">
        
        {/* LEFT SIDEBAR - Desktop */}
        <div className="hidden md:flex w-20 lg:w-24 bg-linear-to-b from-purple-900 to-purple-800 text-white flex-col items-center py-6 gap-8 fixed left-0 h-screen shadow-xl z-10">
          <h1 className="text-xs lg:text-sm font-bold tracking-wider rotate-90 whitespace-nowrap mb-8">MY BANK</h1>
          <nav className="flex flex-col gap-6 items-center">
            <button onClick={() => setActiveTab('home')} className={`p-2 rounded-lg transition-all ${activeTab === 'home' ? 'bg-purple-700 scale-110' : 'hover:bg-purple-800'}`}>
              <FontAwesomeIcon icon={faHome} size="lg" />
            </button>
            <button className="p-2 rounded-lg hover:bg-purple-800 transition-all" onClick={() => setActiveTab('mail')}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </button>
            <button className={`p-2 rounded-lg transition-all ${activeTab === 'mail' ? 'bg-purple-700 scale-110' : 'hover:bg-purple-800'}`} onClick={() => setActiveTab('mail')}>
              <FontAwesomeIcon icon={faTimesCircle} size="lg" />
            </button>
            <button className="p-2 rounded-lg hover:bg-purple-800 transition-all">
              <FontAwesomeIcon icon={faMessage} size="lg" />
            </button>
            <button className="p-2 rounded-lg hover:bg-purple-800 transition-all">
              <FontAwesomeIcon icon={faGear} size="lg" />
            </button>
          </nav>
          <div className="mt-auto mb-6">
            <FontAwesomeIcon icon={faSmile} size="lg" className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex-1 md:ml-20 lg:ml-24 bg-white overflow-x-hidden">
          {/* Header with search */}
          <div className="sticky top-0 bg-white z-10 px-4 sm:px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl flex-1 max-w-md">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                <input type="text" placeholder="Search transactions..." className="bg-transparent outline-none text-sm flex-1" />
              </div>
              <div className="flex gap-4 items-center">
                <button className="relative">
                  <FontAwesomeIcon icon={faBell} className="text-gray-600 text-lg cursor-pointer hover:scale-110 transition-transform" />
                  <span className="absolute -top-1 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <button className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-linear-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="text-white text-sm" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {/* My cards section */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-black flex items-center gap-2">
                My cards
                <button className="w-8 h-8 text-gray-400 bg-amber-50 shadow-md rounded-xl flex items-center justify-center hover:bg-amber-100 transition-colors">
                  <FontAwesomeIcon icon={faPlus} className="text-sm" />
                </button>
              </h1>
              <button className="text-purple-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Manage cards <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </div>

            {/* Cards container - responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Card 1 */}
              <div className="bg-linear-to-b from-amber-900 to-amber-800 rounded-3xl relative h-64 overflow-hidden shadow-xl hover:scale-[1.02] transition-transform cursor-pointer" onClick={someFunction}>
                <div className="absolute bg-fuchsia-900/50 top-0 left-0 rounded-br-full w-48 h-32">
                  <div className="p-4">
                    <FontAwesomeIcon icon={faAsterisk} className="text-white/70 text-xs" />
                    <p className="mt-4 text-white font-semibold">3,513.80 USD</p>
                    <p className="mt-6 text-white/70 text-xs tracking-wider">5467 4497 8342 6693</p>
                    <span className="text-white/50 text-xs">05/29</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-fuchsia-500/30 rounded-bl-full w-32 h-28"></div>
                <div className="absolute right-0 bottom-0 bg-amber-500/30 rounded-tl-full w-28 h-28 flex items-end justify-end p-3">
                  <p className="text-white font-bold text-sm">Visa</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-linear-to-br from-amber-800 to-amber-700 rounded-3xl relative h-64 overflow-hidden shadow-xl hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="absolute inset-0 bg-amber-900/50 rounded-3xl">
                  <div className="p-4">
                    <FontAwesomeIcon icon={faAsterisk} className="text-white/70 text-xs" />
                    <p className="mt-4 text-white font-semibold">3,513.80 USD</p>
                    <p className="mt-6 text-white/70 text-xs tracking-wider">5467 4497 8342 6693</p>
                    <span className="text-white/50 text-xs">05/29</span>
                    <p className="mt-6 text-white font-bold text-sm text-right">Visa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Categories Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Circle stats */}
              <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-800">75%</p>
                          <p className="text-xs text-gray-500">Spent</p>
                        </div>
                      </div>
                    </div>
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="96" cy="96" r="88" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                      <circle cx="96" cy="96" r="88" stroke="#8b5cf6" strokeWidth="12" fill="none" strokeDasharray="553" strokeDashoffset="138" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {categories.map((cat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-3 h-3 ${cat.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{cat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category circles */}
              <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-amber-900 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-amber-50"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm">Drinks</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                          <span className="text-sm">Foods</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-purple-900 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-amber-50"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm">Taxi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                          <span className="text-sm">Carsharing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-6">
                    <FontAwesomeIcon icon={faWallet} className="text-4xl text-amber-600 mb-2" />
                    <p className="text-2xl font-bold text-gray-800">$12,450</p>
                    <p className="text-xs text-gray-500">Total spent this month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offers Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black mb-4">Special Offers</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-linear-to-r from-amber-400 to-amber-500 rounded-2xl p-5 h-36 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-white">Credit</h3>
                  <p className="text-white/80 text-sm">21 Days To Go</p>
                  <p className="text-white/60 text-xs mt-4">0% interest for 3 months</p>
                </div>
                <div className="bg-linear-to-r from-emerald-500 to-emerald-600 rounded-2xl p-5 h-36 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-white">Debit</h3>
                  <p className="text-white/80 text-sm">6 Days To Go</p>
                  <p className="text-white/60 text-xs mt-4">2% cashback on all purchases</p>
                </div>
                <div className="bg-linear-to-r from-fuchsia-500 to-fuchsia-600 rounded-2xl p-5 h-36 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-white">Package of services</h3>
                  <p className="text-white/80 text-sm">12 Days To Go</p>
                  <p className="text-white/60 text-xs mt-4">Premium benefits included</p>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-900 text-white/60 text-center py-4 text-sm">
            &copy; {new Date().getFullYear()} VERA LAR. All rights reserved.
          </footer>
        </div>

        {/* RIGHT SECTION - Transactions */}
        <div className="hidden lg:block w-96 bg-gray-50 border-l border-gray-200 overflow-y-auto h-screen sticky top-0">
          <div className="p-5">
            <div className="flex items-center justify-between mb-6">
              <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50">
                <FontAwesomeIcon icon={faLessThan} className="text-xs text-gray-600" />
              </button>
              <span className="text-sm font-medium text-gray-700">25 May 2026 - 29 May 2026</span>
              <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50">
                <FontAwesomeIcon icon={faGreaterThan} className="text-xs text-gray-600" />
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Transactions</h2>
              <button className="text-purple-600 text-sm font-medium hover:underline">view all</button>
            </div>

            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-800 to-amber-700 text-white flex items-center justify-center">
                      <FontAwesomeIcon icon={transaction.icon} className="text-sm" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">{transaction.name}</h3>
                          <p className="text-gray-400 text-xs">{transaction.time}</p>
                        </div>
                        <strong className="text-red-500 text-sm font-semibold">-${Math.abs(transaction.amount).toFixed(2)}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-4 z-20">
          <button className="flex flex-col items-center text-purple-600">
            <FontAwesomeIcon icon={faHome} className="text-xl" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <span className="text-xs mt-1">Messages</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <FontAwesomeIcon icon={faChartLine} className="text-xl" />
            <span className="text-xs mt-1">Stats</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;