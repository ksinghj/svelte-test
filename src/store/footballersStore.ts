import { writable } from 'svelte/store'
import _ from 'lodash'

const createFootballers = () => {
  const { subscribe, set, update } = writable<string[]>(['MbappΓ© π₯·π’', 'Vini Jr πΊπ§π·', 'M. Salah πͺπ¬π'])

  const addGoat = () => update(state => [...state, 'Messi π¦π·π'])

  const removeGoat = () => update(state => state.filter(baller => !_.isEqual(baller, 'Messi π¦π·π')))

  return {
    subscribe,
    set,
    update,
    addGoat,
    removeGoat
  }
}

export const footballers = createFootballers()
