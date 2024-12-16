<script setup>
import { reactive} from "vue"
import {invoice1, invoice2 } from "./data/data.js"

const msg = 'Invoice Generator'

const data = reactive({
  sender: '',
  bill_to: '',
  ship_to: '',
  invoice_no: '',
  invoice_date: '',
  due_date: '',
  items: [
    {
      description: '',
      quantity: '',
      rate: '',
      amount: '0.00'
    }
  ],
  note: '',
  terms: '',
  total: '',
  tax: '',
  grand_total: '0.00',
  balance_due: ''
  
})

function addMoreItem(){
  data.items.push(
    {
      description: '',
      quantity: '',
      rate: '',
      amount: '0.00'
    }
  )
}

function removeItem(index){
  data.items.splice(index, 1)
}

function totalAmount(){
  let total = 0
  data.items.forEach(item => {
    total += item.amount
  })
  data.total = total
  return total
}

function grandTotal(){
  let grandTotal = 0
  let tax = (data.total * data.tax)/100
  grandTotal = data.total + tax
  data.grand_total = grandTotal
  return grandTotal
}



</script>

<template>
  <section class="container mx-auto py-10">
    <h1 class="text-3xl font-bold text-center mb-5 mt-5">{{ msg }}</h1>
    <div class="logo">
      <img class="mx-auto w-1/12" src="https://cdn-ilcbjon.nitrocdn.com/MoHdtjuLMFTEnODzEpiBGdISOQDpTRqE/assets/images/optimized/technuxt.com/wp-content/uploads/2024/08/technuxt-logo-1-285x285.png" alt="Technuxt">
    </div>
    <p class="p-5 m-5">{{ invoice2 }}</p>

    <div class="mb-5">
      <button @click = "Object.assign(data, invoice1)" class="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Invoices One</button>
      <button @click = "Object.assign(data, invoice2)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Invoices Two</button>
    </div>

    <div class="grid grid-cols-2 gap-12">
      <div>
         <h3 class="text-2xl">Sender</h3>
         <input v-model="data.sender" type="text" class="w-full p-2 border border-gray-300" placeholder="Sender">
         <br><br>
         <div class="grid grid-cols-2 gap-12">
            <div>
              <label for="bill_to">Bill To</label>
              <input v-model="data.bill_to" type="text" class="w-full p-2 border border-gray-300">
            </div>
            <div>
              <label for="ship_to">Ship To</label>
              <input v-model="data.ship_to" type="text" class="w-full p-2 border border-gray-300">
            </div>
         </div>
      </div>
      <div class="text-right">
          <h3 class="text-2xl">INVOICE</h3>
          <input v-model="data.invoice_no" type="text" class="w-full p-2 border border-gray-300" placeholder="Invoice Number">
          <br><br>
          <label for="date">Date</label>
          <input v-model="data.invoice_date" type="date" class="w-full p-2 border border-gray-300">
          <br>
          <label for="due-date">Due Date</label>
          <input v-model="data.due_date" type="date" class="w-full p-2 border border-gray-300">
      </div>
    </div>

    <!-- item area -->
    <div class="mt-5">
      <table class="w-full">
        <thead class="bg-gray-200">
          <tr>
            <th class="p-2 border border-gray-300">Description</th>
            <th class="p-2 border border-gray-300">Quantity</th>
            <th class="p-2 border border-gray-300">Rate</th>
            <th class="p-2 border border-gray-300 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data.items" :key="index">
            <td class="p-2 border border-gray-300">
              <input v-model="item['description']" type="text" class="w-full p-2 border border-gray-300">
            </td>
            <td class="p-2 border border-gray-300">
              <input v-model="item['quantity']" type="number" class="w-full p-2 border border-gray-300">
            </td>
            <td class="p-2 border border-gray-300">
              <input v-model="item['rate']" type="number" class="w-full p-2 border border-gray-300">
            </td>
            <td class="p-2 border border-gray-300 text-right">USD {{ item['amount'] = item['quantity'] * item['rate'] }}</td>
            <td @click="removeItem(index)" class="cursor-pointer">X</td>
          </tr> 
        </tbody>
      </table>
      <button @click="addMoreItem()" class="p-2 border border-gray-300 mt-5">Add More</button>
    </div>


    <!-- button logic area -->
     <div class="grid grid-cols-3 gap-20">
      <div class="col-span-2">
        <label for="note">Note</label>
        <textarea v-model="data.note" class="w-full p-2 border border-gray-300">Note</textarea>
        <label for="note">Terms</label>
        <textarea v-model="data.terms" class="w-full p-2 border border-gray-300">Terms</textarea>
      </div>
      <div class="">
        <label for="total">Total</label>
        <input readonly :value="totalAmount()" type="text" class="w-full p-2 border border-gray-300">
        <label for="total">Tax</label>
        <input v-model="data.tax" type="number" class="w-full p-2 border border-gray-300">
        <label for="total">Grand Total</label>
        <input readonly :value="grandTotal()" type="text" class="w-full p-2 border border-gray-300">

        <label for="Balnce Due">Balnce Due</label>
        <input v-model="data.balance_due" type="number" class="w-full p-2 border border-gray-300">
      </div>

     </div>
  </section>
</template>

<style scoped>

</style>
