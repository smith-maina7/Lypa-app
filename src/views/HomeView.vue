<script setup></script>

<template>
  <main>
    <section
      id="hero"
      class="min-h-screen bg-gradient-to-r from-[#001C5E] via-[#084CA0] to-[#084698] text-white"
    >
      <header>
        <nav class="flex justify-around items-center text-white">
          <div id="logo" class="mt-10 text-3xl font-bold italic">lypa</div>
          <div id="nav" class="mt-10">
            <ul class="flex justify-center gap-6 text-lg">
              <li class="cursor-pointer hover:text-gray-300">Deposit</li>
              <li class="cursor-pointer hover:text-gray-300">Withdraw</li>
              <li class="cursor-pointer hover:text-gray-300">Login</li>
              <li class="cursor-pointer hover:text-gray-300 font-bold">Join</li>
            </ul>
          </div>
        </nav>
      </header>

      <!-- White horizontal line -->
      <hr class="border-t border-white mt-5 mx-8" />

      <!-- Main content -->
      <div class="flex flex-col lg:flex-row items-center px-10 mt-16">
        <!-- Left side (text) -->
        <div class="flex flex-col max-w-md">
          <!-- Green Box -->
          <div
            class="bg-gradient-to-b from-green-400 to-blue-500 rounded-tr-[50px] p-6 w-3/4 mt-28"
          >
            <h1 class="text-3xl font-bold">Send Money to<br />Your Loved Ones</h1>
          </div>

          <!-- White Box -->
          <div class="bg-white text-black p-6">
            <p class="text-sm mb-6">
              You don't need to download ten apps for your financial services. Use LYPA for
              everything. Send money from UAE to Kenya instantly and right from the LYPA app on your
              phone.
            </p>
            <!-- App Store Buttons -->
            <div class="flex gap-4">
              <img src="../assets/images/appstore.png" alt="App Store" class="w-32 h-auto" />
              <img src="../assets/images/image 95.png" alt="Google Play" class="w-32 h-auto" />
            </div>
          </div>
        </div>

        <!-- Right side (form) -->
        <div class="bg-[#F5F8F9] text-black p-8 shadow-xl w-full max-w-md">
          <!-- Country selector -->
          <div class="flex items-center gap-3 mb-6">
            <img src="../assets/images/uae.png" alt="UAE Flag" class="w-6 h-4" />
            <span class="font-semibold">United Arab Emirates</span>
            <span class="ml-auto text-gray-400">▼</span>
          </div>

          <!-- Amount input -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm mb-1">SEND AMOUNT</label>
            <div class="flex items-center border rounded-full px-4 py-2 bg-[#F5F8F9]">
              <span class="text-blue-600 font-bold">AED</span>
              <span class="ml-auto text-lg font-semibold">10,000.00</span>
              <span class="ml-2 text-gray-400">▼</span>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-gray-500 text-sm mb-1">RECEIVE AMOUNT</label>
            <div class="flex items-center border rounded-full px-4 py-2">
              <span class="text-green-600 font-bold">KES</span>
              <span class="ml-auto text-lg font-semibold">320,193.00</span>
              <span class="ml-2 text-gray-400">▼</span>
            </div>
          </div>

          <!-- Exchange rate -->
          <p class="text-sm text-center text-gray-500 mb-4">1 AED = 32.02 KES</p>

          <!-- Send button -->
          <button
            class="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-3 rounded-full transition-all"
          >
            Send
          </button>

          <!-- Terms notice -->
          <p class="text-xs text-center text-gray-400 mt-4">
            By clicking send, I agree with
            <a href="#" class="text-pink-500 underline">terms & policy</a>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
