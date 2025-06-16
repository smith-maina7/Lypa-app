<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen items-center justify-center bg-[#F5F5F5] px-4 py-6">
    <!-- Main Container -->
    <div class="w-full max-w-sm bg-[#F5F5F5] rounded-lg shadow-md p-6 space-y-6">
      <!-- Back Arrow -->
      <div class="text-4xl text-black-600">
        <RouterLink to="/">
          <Icon icon="mdi:arrow-left" />
        </RouterLink>
      </div>

      <!-- Heading -->
      <div class="text-3xl font-semibold text-[#142944]">Create account</div>

      <!-- Input Fields -->
      <div class="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Phone number"
          class="border border-[#6C6D6D] p-4 rounded-[20px] w-full focus:outline-none focus:ring-1 focus:ring-[#6C6D6D] text-[#001C5E] font-semibold text-base bg-[#ECEFF2] shadow-sm"
        />
        <input
          type="password"
          placeholder="Password"
          class="border border-[#6C6D6D] p-4 rounded-[20px] w-full focus:outline-none focus:ring-1 focus:ring-[#6C6D6D] text-[#001C5E] font-semibold text-base bg-[#ECEFF2] shadow-sm"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          class="border border-[#6C6D6D] p-4 rounded-[20px] w-full focus:outline-none focus:ring-1 focus:ring-[#6C6D6D] text-[#001C5E] font-semibold text-base bg-[#ECEFF2] shadow-sm"
        />
      </div>

      <!-- Continue Button -->
      <button
        class="flex items-center justify-between gap-3 px-6 py-3 rounded-[15px] w-full text-white font-semibold text-lg bg-gradient-to-r from-[#3DD29B] to-[#A264C7] hover:opacity-90 transition duration-200 ease-in-out"
      >
        <span class="text-[#001C5E] text-xl">Continue</span>
        <span class="bg-white text-black border border-white rounded-full p-2">
          <Icon icon="mdi:arrow-right" width="30" height="30" />
        </span>
      </button>
    </div>
  </div>
</template>
