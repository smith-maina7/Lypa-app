<script setup>
  import {Icon} from '@iconify/vue'
  
</script>
<template>
    <main class="grid grid-cols-1">
        <div id="container" class="h-67 w-full bg-[#011C5E]">
            <div id="bal-detail" class=" bg-linear-to-r from-[#F5F8F9] to-[#D5DFE2] w-[90%] h-50 rounded-md mx-5 mt-9 flex flex-grow flex-wrap flex-col items-center drop-shadow-[#8092bd]">  
                <p class="text-[20px] text-[#084CA0] font-bold my-2 " >Add Money</p>
                <p class="text-black text-[5px] font-bolder">Account Balance</p>
                <p class="text-xl font-bold mb-6">Kes. 20,000<span class="text-sm">.00</span></p>
                <p class="text-sm text-[#084CA0] font-bold mb-2 text-[7px]">How would you like to deposit?</p>
                

             <div id="bal-cards" class="flex gap-4 mt-2">
                <p class="bg-white rounded-[20px] w-[77px] h-[30px] shadow-md bg-[url('/images/mpesa.png')] object-contain bg-no-repeat bg-center">
                </p>

                <p class="bg-white rounded-[20px] w-[77px] h-[30px] flex items-center justify-center text-center shadow-md text-[#6C6663] opacity-[50%] text-[7px]">
                  Coming Soon
                </p>
                 <p class="bg-white rounded-[20px] w-[77px] h-[30px] flex items-center justify-center text-center shadow-md text-[#6C6663] opacity-[50%] text-[7px]">
                  Coming Soon
                </p>                      
             </div>  
            </div>
        </div>
        <div class="w-full h-40 bg-[#ECEEF2] opacity-100% grid grid-cols-3 place-items-center px-10">
            <div>
                <div class="bg-white w-[61px] h-[62px] grid grid-cols-1 place-items-center rounded-2xl mb-2">
                    <img src="/images/world.png" alt="Image of the World" class="w-[39px] h-[37px]"></div>
                <p class="text-[#142944] text-[9px] px-2">Send Money</p>
            </div>
            <div>
                <div class="bg-white w-[61px] h-[62px] grid grid-cols-1 place-items-center rounded-2xl mb-2">
                    <img src="/images/Image97.png" alt="Image of the World" class="w-[39px] h-[37px]"></div>
                <p class="text-[#142944] text-[9px] px-2">Airtime Topup</p>
            </div>
            <div>
                <div class="bg-white w-[61px] h-[62px] grid grid-cols-1 place-items-center rounded-2xl mb-2">
                    <img src="/images/Image96.png" alt="Image of the World" class="w-[39px] h-[37px]"></div>
                <p class="text-[#142944] text-[9px] px-2">Bill Payments</p>
            </div>
        </div>
        <div class="p-4 bg-white max-w-md mx-auto w-[100%]">
            <h2 class="text-[#6C6663] text-sm font-semibold mb-4">RECENT TRANSACTIONS</h2>

            <!-- Transaction Card -->
             <div class="space-y-4">
            <!-- Repeat this block for each transaction -->
          <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
            <div class="flex items-center gap-3">
               <img src="https://via.placeholder.com/40" alt="Avatar" class="w-[35px] h-[39px] rounded-full object-cover" />
            <div>
              <p class="font-semibold text-sm">Brenda Brenda</p>
              <p class="text-[8px] text-[#6C6663]">School Fees • 25 Apr, 20</p>
            </div>
            </div>
            
            <div class="text-right">
                <p class="font-semibold text-sm">Kes. 10,000.00</p>
                <p class="text-[7px] text-[#0037BC]">Sent</p>
          </div>

        </div>

    <!-- Pending version -->
    <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
      <div class="flex items-center gap-3">
        <img src="https://via.placeholder.com/40" alt="Avatar" class="w-10 h-10 rounded-full object-cover" />
        <div>
          <p class="font-semibold text-sm">Brenda Brenda</p>
          <p class="text-[8px] text-[#6C6663]">School Fees • 25 Apr, 20</p> 
        </div>
      </div>
      <div class="text-right">
        <p class="font-semibold text-sm">Kes. 10,000.00</p>
        <p class="text-sm text-[#0DB90F] text-[7px]">Sent</p>
      </div>
    </div>

    <!-- Pending version -->
    <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
      <div class="flex items-center gap-3">
        <img src="https://via.placeholder.com/40" alt="Avatar" class="w-10 h-10 rounded-full object-cover" />
        <div>
          <p class="font-semibold text-sm">Brenda Brenda</p>
          <p class="text-xs text-gray-500">School Fees • 25 Apr, 20</p>
        </div>
      </div>
      <div class="text-right">
        <p class="font-semibold text-sm">Kes. 10,000.00</p>
        <p class="text-[7px] text-[#F2CD4E]">Pending</p>
      </div>
    </div>

    <!-- Pending version -->
    <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
      <div class="flex items-center gap-3">
        <img src="https://via.placeholder.com/40" alt="Avatar" class="w-10 h-10 rounded-full object-cover" />
        <div>
          <p class="font-semibold text-sm">Brenda Brenda</p>
          <p class="text-xs text-gray-500">School Fees • 25 Apr, 20</p>
        </div>
      </div>
      <div class="text-right">
        <p class="font-semibold text-sm">Kes. 10,000.00</p>
        <p class="text-[7px] text-[#F2CD4E]">Pending</p>
      </div>
    </div>

    <!-- Another variant -->
    <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
      <div class="flex items-center gap-3">
        <img src="https://via.placeholder.com/40" alt="Avatar" class="w-10 h-10 rounded-full object-cover" />
        <div>
          <p class="font-semibold text-sm">Brenda Brenda</p>
          <p class="text-xs text-gray-500">School Fees • 25 Apr, 20</p>
        </div>
      </div>
      <div class="text-right">
        <p class="font-semibold text-sm">Kes. 500.00</p>
        <p class="text-[7px] text-[#0037BC]">Sent</p>
      </div>
    </div>
  </div>

  <!-- Bottom Navigation -->
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center p-4">
    <button class="flex justify-evenly items-center text-white bg-[#142944] w-[67px] h-[34px] rounded-2xl ">
      <img src="/images/home.png" alt="home image" class="pl-2">
      <span class="text-[9px] px-2">Home</span>
    </button>
    <button class="flex flex-col items-center text-gray-500">
      <img src="/images/transaction.png" alt="transaction image" class="pl-2">
    </button>
    <button class="flex flex-col items-center text-gray-500">
        <img src="/images/envelop.png" alt="">
    </button>
    <button class="flex flex-col items-center text-gray-500">
      
      <Icon icon="humbleicons:align-text-left" class="w-6 h-6 mb-1 text-[#0037BC]" />

    </button>
  </div>
</div>
    </main>
</template>