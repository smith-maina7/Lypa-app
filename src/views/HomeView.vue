<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <!-- Mobile Hero -->
    <section
      id="mobile-hero"
      class="relative min-h-screen bg-gradient-to-r from-[#001C5E] to-[#084CA0] text-white flex flex-col px-6 pt-10 pb-10 lg:hidden overflow-hidden"
    >
      <!-- Background Image Layer -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-[65%] w-[881px] h-[359px] bg-[url('/images/hands.png')] bg-no-repeat bg-contain bg-center pointer-events-none"
      ></div>

      <!-- Top Content -->
      <div class="z-10 flex flex-col items-center">
        <!-- Logo -->
        <h1 class="text-5xl font-bold text-center">Lypa</h1>

        <!-- Tagline -->
        <p class="text-4xl text-center font-semibold leading-snug mt-20">
          Send Money<br />
          To your<br />
          Loved ones
        </p>
      </div>

      <!-- Spacer to push buttons to bottom -->
      <div class="flex-grow"></div>

      <!-- Bottom Buttons -->
      <div class="flex gap-6 justify-center z-10 mb-10">
        <button class="bg-[#3DD29B] text-white py-3 rounded-full font-semibold h-[44px] w-[139px]">
          Login
        </button>
        <button class="bg-white text-[#043682] py-3 rounded-full font-semibold h-[44px] w-[139px]">
          Join
        </button>
      </div>
    </section>

    <section
      id="desktop-hero"
      class="hidden lg:grid grid-cols-1min-h-screen bg-gradient-to-r from-[#084698] to-[#001C5E] text-white"
    >
      <!-- Header & Nav -->
      <header>
        <nav class="flex justify-around items-center text-white">
          <div id="logo" class="mt-10 text-3xl font-bold italic">lypa</div>
          <div id="nav" class="mt-10">
            <ul class="flex justify-center gap-6 text-lg">
              <router-link to="/signin" class="cursor-pointer hover:text-gray-300">
                <li>Deposit</li>
              </router-link>

              <router-link to="/signin" class="cursor-pointer hover:text-gray-300">
                <li>Withdraw</li>
              </router-link>

              <router-link to="/signin" class="cursor-pointer hover:text-gray-300">
                <li>Login</li>
              </router-link>

              <router-link to="/signup" class="cursor-pointer hover:text-gray-300 font-bold">
                <li>Join</li>
              </router-link>
            </ul>
          </div>
        </nav>
      </header>

      <!-- White horizontal line -->
      <hr class="border-t border-white mt-5 mx-8" />

      <!-- Main content -->
      <div
        class="flex flex-col lg:flex-row items-center lg:items-end px-4 lg:px-10 mt-5 w-full lg:w-4/5 mx-auto space-y-8 lg:space-y-0 pb-12"
      >
        <!-- Left side (text) -->
        <div
          class="flex flex-col justify-between mt-8 pt-[52px] w-full max-w-[700px] min-h-[700px]"
        >
          <!-- Green Box -->
          <div
            class="bg-gradient-to-b from-[#68EB75] to-[#0D6DB8] rounded-tr-[70px] p-6 w-[80%] min-h-[240px] mt-28"
          >
            <h1 class="text-4xl font-bold mt-10">Send Money to<br />Your Loved Ones</h1>
          </div>

          <!-- White Box -->
          <div class="bg-white text-black p-[34px] min-h-[300px]">
            <p class="text-lg font-semibold mt-8 mb-6">
              You don't need to download ten apps for your financial services. Use LYPA for
              everything. Send money from UAE to Kenya instantly and right from the LYPA app on your
              phone.
            </p>
            <div class="flex gap-4">
              <img src="/images/appstore.png" alt="App Store" class="w-32 h-auto" />
              <img src="/images/Image95.png" alt="Google Play" class="w-32 h-auto" />
            </div>
          </div>
        </div>

        <!-- Right side (form) -->
        <div
          class="flex flex-col justify-between gap-y-6 bg-gradient-to-r from-[#F5F8F9] to-[#D5DFE2] text-[#001c5e] p-8 shadow-xl w-full max-w-[1000px] min-h-[200px]"
        >
          <!-- Country Selector -->
          <div class="flex items-center gap-4 rounded-full px-6 py-2 shadow-lg bg-white mt-8">
            <img src="/images/uae.png" alt="UAE Flag" class="h-7 w-12" />
            <span class="font-semibold text-2xl pl-10 m-4">United Arab Emirates</span>
            <span class="ml-auto text-[#FB527E]">▼</span>
          </div>

          <!-- Form Inputs -->
          <div class="flex flex-col gap-y-4">
            <!-- Send Amount -->
            <div>
              <label class="block text-[#001C5E] font-bold mb-6">SEND AMOUNT</label>
              <div class="flex items-center rounded-full shadow-lg px-4 py-2 bg-[#F5F8F9]">
                <span class="text-[#001C5E] font-semibold text-2xl">AED</span>
                <span class="ml-2 text-[#FB527E] p-2">▼</span>
                <div class="border-l-4 h-8 border-gray-300 mx-2"></div>
                <span class="pl-4 text-3xl font-semibold text-[#001C5E] m-4 mb-6">10,000.00</span>
              </div>
            </div>

            <!-- Receive Amount -->
            <div>
              <label class="block text-[#001C5E] font-semibold mb-6">RECEIVE AMOUNT</label>
              <div class="flex items-center rounded-full shadow-lg px-4 py-2 bg-[#F5F8F9]">
                <span class="text-[#001C5E] font-semibold text-2xl">KES</span>
                <span class="ml-2 text-[#FB527E] p-2">▼</span>
                <div class="border-l-4 h-8 border-gray-300 mx-2 p-2"></div>
                <span class="pl-4 text-3xl font-semibold text-[#001C5E] m-4 mb-6">320,193.00</span>
              </div>
            </div>
          </div>

          <!-- Exchange Rate -->
          <p class="text-[#001C5E] font-bold text-center mt-2">1 AED = 32.02 KES</p>

          <!-- Send Button -->
          <button
            class="m-auto w-6/10 bg-[#3DD29B] hover:bg-green-500 text-white text-xl font-bold py-3 rounded-full transition-all"
          >
            Send
          </button>

          <!-- Terms -->
          <p class="text-xs text-center text-[#142944] font-medium">
            By clicking send, I agree with
            <a href="#" class="text-pink-500 underline">terms & policy</a>
          </p>
        </div>
      </div>
    </section>
    <section
      id="cards"
      class="bg-gradient-to-r from-[#F5F8F9] to-[#E4E4E4] min-h-full flex flex-col px-4 py-10"
    >
      <!-- Heading Section -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
        <p class="text-3xl sm:text-4xl md:text-5xl text-[#142944] font-semibold">
          All Your Payments In <span class="block sm:inline">one place</span>
        </p>
        <div class="text-base sm:text-lg text-[#142944] leading-relaxed">
          LYPA App helps with more than just sending money.
          <span class="block sm:inline">Make bill payments and recharge mobile airtime</span>
          <span class="block sm:inline">instantly. All in one APP, Lypa App.</span>
        </div>
      </div>

      <!-- Cards Section -->
      <div class="flex flex-wrap justify-center gap-6 mt-12">
        <!-- Card 1 -->
        <div
          class="flex flex-col items-center shadow-lg bg-white rounded-[30px] w-[280px] sm:w-[300px] h-[300px] p-6"
        >
          <img class="w-[160px] h-[160px]" src="/images/Image96.png" alt="Bill Payments" />
          <div class="text-lg sm:text-xl text-[#142944] mt-4 font-semibold text-center">
            Bill Payments
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="flex flex-col items-center shadow-lg bg-white rounded-[30px] w-[280px] sm:w-[300px] h-[300px] p-6"
        >
          <img class="w-[140px] h-[140px]" src="/images/Image97.png" alt="Airtime Topup" />
          <div class="text-lg sm:text-xl text-[#142944] mt-4 font-semibold text-center">
            Airtime Topup
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="flex flex-col items-center shadow-lg bg-white rounded-[30px] w-[280px] sm:w-[300px] h-[300px] p-6"
        >
          <img class="w-[160px] h-[160px]" src="/images/world.png" alt="Send Money" />
          <div class="text-lg sm:text-xl text-[#142944] mt-4 font-semibold text-center">
            Send Money
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section id="footer" class="bg-gradient-to-r from-[#084CA0] to-[#084698] py-10">
      <div class="text-white text-center max-w-4xl mx-auto px-4">
        <p class="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
          Start Sending Money<br />Stress Free
        </p>
        <div
          class="flex flex-wrap justify-center gap-2 sm:gap-4 text-[#6AED75] text-xs sm:text-sm font-semibold"
        >
          <span>Great Exchange Rates</span>
          <span>*</span>
          <span>Super Fast Transfers</span>
          <span>*</span>
          <span>Instant Payments</span>
        </div>
      </div>
    </section>
  </main>
</template>
