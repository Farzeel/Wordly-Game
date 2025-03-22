import { useState } from 'react';

export default function GameNavbar({ setDisplayImg, playerName, gamesWon, gamesLost, totalGames }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex flex-col md:flex-row justify-between items-center shadow-lg">
      {/* Mobile Header */}
      <div className="flex w-full justify-between items-center md:hidden">
        <div className="text-2xl font-bold tracking-wide text-yellow-400">
          Game Stats
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> 
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> 
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full mt-2 space-y-4 bg-gray-900 p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">🏆 Win:</span>
              <span className="font-semibold text-yellow-400">{gamesWon}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">😥 Lose:</span>
              <span className="font-semibold text-yellow-400">{gamesLost}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">🎮 Total Games:</span>
              <span className="font-semibold text-blue-400">{totalGames}</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <span
                onClick={() => setDisplayImg(true)}
                className="text-gray-300 hover:font-semibold"
              >
                ℹ️ Game Instructions
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-yellow-400"
            />
            <span className="font-semibold">{playerName}</span>
          </div>
        </div>
      )}

      {/* Desktop Content */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center w-full">
        <div className="text-2xl font-bold tracking-wide text-yellow-400 mb-2 md:mb-0">
          Game Stats
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-base mb-2 md:mb-0">
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">🏆 Win:</span>
            <span className="font-semibold text-yellow-400">{gamesWon}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">😥 Lose:</span>
            <span className="font-semibold text-yellow-400">{gamesLost}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">🎮 Total Games:</span>
            <span className="font-semibold text-blue-400">{totalGames}</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <span
              onClick={() => setDisplayImg(true)}
              className="text-gray-300 hover:font-semibold"
            >
              ℹ️ Game Instructions
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-yellow-400"
          />
          <span className="font-semibold">{playerName}</span>
        </div>
      </div>
    </nav>
  );
}