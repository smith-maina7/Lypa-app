<script setup>
   import { Icon } from '@iconify/vue';
    import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="flex flex-col max-w-sm mx-auto p-6 bg-[#F5F5F5] rounded-lg shadow-md space-y-6 mt-50">
    <div class="text-4xl text-black-600 my-4">
    <RouterLink to='/'><Icon icon="mdi:arrow-left" /></RouterLink>
  </div>
    <div class="text-3xl font-semibold text-[#142944] mb-6">
      Create account
    </div>
    <div class="flex flex-col space-y-4">
      <input
      type="text"
      id="phone"
      placeholder="Phone number"
      class=" border-[#6C6D6D] p-4 rounded-[20px] w-full focus:outline-none focus:ring-1 focus:ring-[#6C6D6D] text-[#001C5E] font-semibold text-lg bg-[#ECEFF2] mb-20 shadow-sm"
    />
     <input
      type="password"
      id="password"
      placeholder="Password"
      class=" border-[#6C6D6D] p-4 rounded-[20px] w-full focus:outline-none focus:ring-1 focus:ring-[#6C6D6D] text-[#001C5E] font-semibold text-lg bg-[#ECEFF2] mb-4 shadow-sm"
    />
      <input type="password"
      id="confirm-password"
      placeholder="Confirm Password"
      class=" border-[#6C6D6D] p-4 rounded-[20px] w-full focus:outline-none focus:ring-1 focus:ring-[#6C6D6D] text-[#001C5E] font-semibold text-lg bg-[#ECEFF2] mb-30 shadow-sm" />
    </div>

    <button
  class="flex items-center justify-between gap-3 px-6 py-3 rounded-[15px]
         text-white font-semibold text-lg
         bg-gradient-to-r from-[#3DD29B] to-[#A264C7]
         hover:opacity-90 transition duration-200 ease-in-out mb-15"
>
  <span class="text-[#001C5E] text-xl">Continue</span>

  <span
    class="bg-white text-black border border-white rounded-full p-2"
  >
    <Icon icon="mdi:arrow-right" width="40" height="40"  />
  </span>
</button>
  </div>
</template>
