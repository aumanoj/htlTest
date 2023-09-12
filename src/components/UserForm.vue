<template>
  <form @input="handleInputChange" class="w-full">
    <div class="mb-4">
      <label for="field1" class="block text-sm font-medium text-gray-700">Field 1</label>
      <input
        v-model="formData.field1"
        type="text"
        id="field1"
        name="field1"
        class="form-input rounded-md shadow-sm mt-1 block w-full"
      />
    </div>
    <div class="mb-4">
      <label for="field2" class="block text-sm font-medium text-gray-700">Field 2</label>
      <input
        v-model="formData.field2"
        type="text"
        id="field2"
        name="field2"
        class="form-input rounded-md shadow-sm mt-1 block w-full"
      />
    </div>
    <div class="mb-4">
      <label for="field3" class="block text-sm font-medium text-gray-700">Field 3</label>
      <input
        v-model="formData.field3"
        type="text"
        id="field3"
        name="field3"
        class="form-input rounded-md shadow-sm mt-1 block w-full"
      />
    </div>
    <div class="mb-4">
      <label for="field4" class="block text-sm font-medium text-gray-700">Field 4</label>
      <input
        v-model="formData.field4"
        type="text"
        id="field4"
        name="field4"
        class="form-input rounded-md shadow-sm mt-1 block w-full"
      />
    </div>
    <div class="mb-4">
      <label for="field5" class="block text-sm font-medium text-gray-700">Field 5</label>
      <input
        v-model="formData.field5"
        type="text"
        id="field5"
        name="field5"
        class="form-input rounded-md shadow-sm mt-1 block w-full"
      />
    </div>
  </form>
  <div class="mt-4">
    <p class="text-2xl">Completion Percentage: <span class="font-semibold">{{ completionPercentage }}%</span></p>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import debounce from '../services/commMethod'
import { doc, setDoc } from 'firebase/firestore'

/*  Firebase setup */
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDqJF9lOkCeBTnJfd50vKCD7QkhYn79Diw',
  authDomain: 'demoapp-57eeb.firebaseapp.com',
  projectId: 'demoapp-57eeb',
  storageBucket: 'demoapp-57eeb.appspot.com',
  messagingSenderId: '266825543061',
  appId: '1:266825543061:web:c3ef5874596973058bda9c',
  measurementId: 'G-K10MXVP7M1'
}
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

/* interface formData */
interface FormData {
  field1: string,
  field2: string,
  field3: string,
  field4: string,
  field5: string
}
const formData: FormData = reactive({
  field1: '',
  field2: '',
  field3: '',
  field4: '',
  field5: ''
})

const saveFormData = debounce(async () => {
  /* from1 is the collection name and form is the id name */
  const formDocRef = doc(db, 'form1', 'form')

  try {
    await setDoc(formDocRef, formData)
    console.log('Form data saved to Firestore')
  } catch (error) {
    console.error('Error saving form data:', error)
  }
}, 1000)

const handleInputChange = () => {
  saveFormData()
}

/* progress rate */
const completionPercentage = computed(() => {
  const filledFields = Object.values(formData).filter((value) => value.trim() !== '')
  return (filledFields.length / 5) * 100
})
</script>

<style scoped></style>
