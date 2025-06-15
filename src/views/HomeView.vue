<script setup>
   import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <section id="hero" class="min-h-screen bg-gradient-to-r from-[#084698] to-[#001C5E] text-white">
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
      <div class="flex flex-col lg:flex-row items-center px-10 mt-16 w-4/5 mx-auto">
        <!-- Left side (text) -->
        <div class="flex flex-col mt-8 pt-[52px] max-w-[700px] min-h-[700px]">
          <!-- Green Box -->
          <div
            class="bg-gradient-to-b from-[#68EB75] to-[#0D6DB8] rounded-tr-[70px] p-6 w-6/7 mt-28 min-h-[220px]"
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
            <!-- App Store Buttons -->
            <div class="flex gap-4">
              <img src="@/assets/images/appstore.png" alt="App Store" class="w-32 h-auto" />
              <img src="@/assets/images/Image95.png" alt="Google Play" class="w-32 h-auto" />
            </div>
          </div>
        </div>

        <!-- Right side (form) -->
        <div
          class="flex flex-col justify-start gap-y-6 bg-gradient-to-r from-[#F5F8F9] to-[#D5DFE2] text-[#001c5e] p-8 shadow-xl w-full max-w-[700px] min-h-[700px]"
        >
          <!-- Country selector -->
          <div class="flex items-center gap-4 rounded-full px-6 py-2 shadow-lg bg-white mt-8">
            <img src="@/assets/images/uae.png" alt="UAE Flag" class="h-7 w-12" />
            <span class="font-semibold text-3xl pl-10 m-4">United Arab Emirates</span>
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
    <section id="cards" class="bg-linear-to-r from-[#F5F8F9] to-[#E4E4E4] min-h-full flex flex-col">
      <div class="flex flex-col flex-wrap w-xl flex-grow m-auto mt-12 gap-10">
        <p class="text-5xl text-[#142944] font-semibold mx-10">
          All Your Payments In <span class="inline-block mx-30">one place</span>
        </p>
        <div class="text-lg text-[#142944]">
          LYPA App helps with more than just sending money. You can easily
          <span class="text-lg inline-block mx-12"
            >make bill payments and even recharge mobile airtime</span
          >
          <span class="text-lg inline-block mx-27">Instantly. All in one APP, Lypa App.</span>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-15 mt-20 py-10">
        <!-- Card 1 -->
        <div
          class="flex flex-col items-center shadow-lg bg-white rounded-[30px] w-[320px] h-[320px] p-6"
        >
          <img class="w-[200px] h-[200px]" src="@/assets/images/Image96.png" alt="Bill Payments" />
          <div class="text-xl text-[#142944] mt-4 font-semibold text-center">Bill Payments</div>
        </div>

        <!-- Card 2 -->
        <div
          class="flex flex-col items-center shadow-lg bg-white rounded-[30px] w-[320px] h-[320px] p-6"
        >
          <img
            class="w-[150px] h-[19 0px]"
            src="@/assets/images/Image97.png"
            alt="Airtime Topup"
          />
          <div class="text-xl text-[#142944] mt-4 font-semibold text-center m-auto">
            Airtime Topup
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="flex flex-col items-center shadow-lg bg-white rounded-[30px] w-[320px] h-[320px] p-6 mb-30"
        >
          <img class="w-[200px] h-[200px]" src="@/assets/images/world.png" alt="Send Money" />
          <div class="text-xl text-[#142944] mt-4 font-semibold text-center">Send Money</div>
        </div>
      </div>
    </section>
    <section id="footer" class="bg-linear-to-r from-[#084CA0] to-[#084698] min-h-1/3">
      <div class="bg-linear-to-t from-[#084CA0] to-[#084698] text-white py-10 text-center">
        <p class="text-4xl font-bold leading-tight my-4">Start Sending Money<br />Stress Free</p>
        <div class="my-4 flex justify-center space-x-4 text-[#6AED75] text-sm font-semibold">
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
