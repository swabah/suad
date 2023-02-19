import React from 'react'

function QiuckPerson(props) {
  return (
    <tr class="hover:bg-gray-50">
    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
      <div class="relative h-10 w-10">
        <img
          class="h-full w-full rounded-full object-cover object-center"
          src={props.img}
          alt="Waiting"
        />
        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
      </div>
      <div class="text-sm">
        <div class="font-medium text-gray-700">{props.name}</div>
        <div class="text-gray-400 text-xs">{props.status}</div>
      </div>
    </th>
    <td class="px-6 py-4">
      <span
        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
        Active
      </span>
    </td>
    <td class="px-6 py-4">{props.number}</td>
    <td class="px-6 py-4">
      <div class="flex gap-2">
        <span
          class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
        >
          {props.email}
        </span>
      </div>
    </td>
  </tr>
  )
}

export default QiuckPerson
