import { defineStore } from 'pinia'
import type { Person } from '@/shared/Person.model'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import { environment } from '@/environments/environment'

export const usePhonebookStore = defineStore('phonebook', {
  state: () => {
    return {
      persons: [] as Person[],
      searchQuery: '' as string
    }
  },
  actions: {
    async fetchPersons() {
      try {
        const response: AxiosResponse<Person[]> = await axios.get<Person[]>(environment.getPersons)
        if (response.status === 200) {
          this.persons = response.data
        }
      } catch (error) {
        //TODO display some modal or smth
      }
    }
  },
  getters: {
    filteredPersons(state): Person[] {
      return state.persons.filter((person) =>
        person.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    getPersonContent(state): (id: number) => Person {
      return (id: number) => state.persons.filter((person) => person.id === id)[0]
    }
  }
})
