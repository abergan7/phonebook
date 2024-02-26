<script setup lang="ts">
import type { Person } from '@/shared/Person.model'

const props = defineProps<{ person: Person }>()
const getInitials = (name: string) => {
  const initials: string[] = []
  const fullName = name.split(' ')
  fullName.forEach((name) => {
    if (name) {
      initials.push(name.charAt(0).toUpperCase())
    }
  })
  return initials.join('')
}
</script>

<template>
  <div
    class="max-w-sm mx-auto mb-4 rounded cursor-pointer overflow-hidden shadow-lg transition-transform duration-400 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="px-6 py-4 flex items-center">
      <div
        class="aspect-w-1 p-3 rounded aspect-h-1 flex items-center justify-center bg-gray-300 text-gray-600 font-bold text-xl mr-4"
      >
        {{ getInitials(props.person.name) }}
      </div>
      <div>
        <div class="font-bold text-xl mb-2">
          {{ props.person.name }}
        </div>
        <p class="text-gray-700 text-base">
          {{ props.person.phone }}
        </p>
      </div>
    </div>
  </div>
</template>
