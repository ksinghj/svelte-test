<script lang="ts">
  import svelteLogo from './assets/svelte.svg'

  import Counter from './lib/Counter.svelte'
  import NameInput from './lib/NameInput.svelte'
  import TodoList from './lib/TodoList.svelte'
  import WriteableList from './lib/WriteableList.svelte'

  import { footballers } from './store/footballersStore'

  let count = 5
  let name = 'kartar'

  const increment = () => {
    count += 1
  }

  const handleAddBaller = (event) => {
    footballers.set([...$footballers, event.detail.item])
    // this would also work:
    // $footballers = [...$footballers, event.detail.item]
  }
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter on:increment={increment} count={count} />
    <NameInput bind:text={name} />
  </div>
  <div class="card">
    Count: {count} <br />
    Name: {name}
  </div>

  <div class="card">
    <TodoList />
  </div>

  <div class="card">
    <h2>Name as many footballers as you know:</h2>
    <WriteableList item='Footballer' items={$footballers} on:add_item={handleAddBaller} />
    {#each $footballers as baller}
      <p>{baller}</p>
    {/each}
    <button on:click={footballers.addGoat}>Add 🐐</button>
    <button on:click={footballers.removeGoat}>Remove 🐐</button>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>