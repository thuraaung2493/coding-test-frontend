'use client';

import {
  ArrowPathRoundedSquareIcon,
  BackwardIcon,
  ComputerDesktopIcon,
  ForwardIcon,
  MusicalNoteIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex h-screen text-white bg-pink-600">
      <div className="w-full max-h-[85%] bg-gray-200 z-50 rounded-b-4xl shadow-2xl">
        <div className="grid h-full lg:grid-cols-12 rounded-b-4xl">
          <div className="lg:col-span-3 bg-gray-100/30 backdrop-blur-lg rounded-bl-4xl"></div>
          <div className="bg-white lg:col-span-9 rounded-br-4xl">
            <div className="flex items-center justify-between gap-10 p-16 overflow-hidden">
              <div className="transition ease-in-out delay-150 bg-gradient-to-tr from-pink-700 to-pink-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-pink-400/50 duration-300 w-[550px] h-72 rounded-4xl flex flex-col justify-between shrink-0">
                <div className="p-8">
                  <h1 className="text-5xl font-extrabold text-white">
                    GET LOST
                  </h1>
                  <p className="text-xl font-bold leading-relaxed text-pink-400">
                    in your music.
                  </p>
                </div>
                <div className="p-6">
                  <PlayCircleIcon className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="transition ease-in-out delay-150 bg-gradient-to-tr from-blue-700 to-blue-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/50 duration-300 w-[550px] h-72 rounded-4xl flex flex-col justify-between shrink-0">
                <div className="p-8">
                  <h1 className="text-5xl font-extrabold text-white">MELLOW</h1>
                  <p className="text-xl font-bold leading-relaxed text-blue-400">
                    beats.
                  </p>
                </div>
                <div className="p-6">
                  <PlayCircleIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-pink-600">
        <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
          <div className="flex items-center w-1/4 space-x-4">
            <div className="w-16 h-16 bg-pink-900 border-pink-400 rounded-full border-3"></div>
            <div>
              <h4 className="font-bold text-white">All That Jazz</h4>
              <p className="text-sm text-gray-100">Yoshkou Artists</p>
            </div>
          </div>

          <div className="flex items-center w-2/3">
            <div className="flex items-center mb-2 space-x-6">
              <button className="text-white hover:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="shuffleIconTitle"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  fill="none"
                  color="inherit"
                  className="w-8 h-8 stroke-2 stroke-gray-300/70"
                >
                  {' '}
                  <title id="shuffleIconTitle">Shuffle</title>{' '}
                  <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{' '}
                  <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{' '}
                  <path d="M19 4L22 7L19 10" /> <path d="M19 13L22 16L19 19" />{' '}
                </svg>
              </button>

              <button className="text-white hover:text-gray-100">
                <BackwardIcon className="w-8 h-8" />
              </button>

              <button
                className="p-2 transition bg-white rounded-full hover:scale-105"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 4h4v16H6zM14 4h4v16h-4z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3l14 9-14 9V3z"
                    />
                  </svg>
                )}
              </button>

              <button className="text-white hover:text-gray-100">
                <ForwardIcon className="w-8 h-8" />
              </button>

              <button className="text-white hover:text-gray-100">
                <ArrowPathRoundedSquareIcon className="w-8 h-8" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center w-full ml-3 space-x-2">
              <span className="text-xs text-white">2:34</span>
              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-white">4:20</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center justify-end w-1/4 space-x-4">
            <MusicalNoteIcon className="w-6 h-6 text-white" />
            <ComputerDesktopIcon className="w-6 h-6 text-white" />
            <SpeakerWaveIcon className="w-6 h-6 text-white" />
            <div className="w-24 h-1 bg-gray-600 rounded-full">
              <div className="w-2/3 h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
