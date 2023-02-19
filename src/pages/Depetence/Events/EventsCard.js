import React from 'react'
import { Link } from 'react-router-dom'

function EventsCard(props) {
  return (
    <a href="#" class="block rounded-lg p-4 bg-transparent shadow-lg shadow-indigo-100 w-72">
  <img
    alt="Home"
    src={props.imgE}
    class="h-auto w-full drop-shadow-md rounded-md object-cover"
    />

  <div class="mt-2">
    <dl>
      <div>
        <dd class="text-sm font-bold pt-2 text-[#1c415d] uppercase">{props.head}</dd>
      </div>
      <div>
        <dd class="mt-1.5 font-medium text-xs max-h-8 overflow-hidden ">{props.title}</dd>
        <a href={props.link} class="font-medium text-xs text-blue-700 mt-0.5 underline underline-offset-1">Read more</a>
      </div>
    </dl>

    {/* <div class="mt-4 flex items-center gap-5 text-xs">
      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
        class="h-4 w-4 text-indigo-700"
        xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500">Parking</p>

          <p class="font-medium">2 spaces</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500">Bathroom</p>

          <p class="font-medium">2 rooms</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500">Bedroom</p>

          <p class="font-medium">4 rooms</p>
          </div>
      </div>
    </div> */}
  </div>
</a>
  )
}

export default EventsCard
