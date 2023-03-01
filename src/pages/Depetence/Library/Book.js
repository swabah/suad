import React from 'react'

function Book(props) {
  return (
    <tr>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
                <img class="w-full h-full rounded-full"
                    src={props.img}
                    alt="" />
            </div>
            <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">
                    {props.name}
                </p>
            </div>
        </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{props.writer}</p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            {props.price}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden
                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <span class="relative">{props.status}</span>
        </span>
    </td>
</tr>

  )
}

export default Book
