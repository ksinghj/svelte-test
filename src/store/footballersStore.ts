import { writable } from 'svelte/store'
import _ from 'lodash'

const createFootballers = () => {
  const { subscribe, set, update } = writable<string[]>(['Mbappé 🥷🐢', 'Vini Jr 🕺🇧🇷', 'M. Salah 🇪🇬👑'])

  const addGoat = () => update(state => [...state, 'Messi 🇦🇷🐐'])

  const removeGoat = () => update(state => state.filter(baller => !_.isEqual(baller, 'Messi 🇦🇷🐐')))

  return {
    subscribe,
    set,
    update,
    addGoat,
    removeGoat
  }
}

export const footballers = createFootballers()
