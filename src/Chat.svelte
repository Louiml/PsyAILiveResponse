<script>
  import { onMount, onDestroy, afterUpdate } from 'svelte';
  import { writable } from 'svelte/store';
  import Typed from 'typed.js';

  let message = '';
  let response = writable('');

  const sendMessage = async () => {
    try {
      const res = await fetch('https://chatapi.louiml.net/api/qhu-1.0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      response.set(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  let eventSource;
  onMount(() => {
    eventSource = new EventSource('https://chatapi.louiml.net/api/qhu-1.0/stream');
    eventSource.addEventListener('message', handleResponse);
  });

  let typed;
  let cursorVisible = true;

  afterUpdate(() => {
    const cursorSpan = document.getElementById('cursor');
    cursorSpan.style.opacity = cursorVisible ? '1' : '0';
    cursorSpan.classList.add('cursor-blink');

    if (typed) {
      typed.destroy();
    }

    const startDelay = getRandomStartDelay(1000, 12000);
    const speed = getRandomStartDelay(20, 140);

    typed = new Typed('#response-wrapper', {
      strings: [$response],
      typeSpeed: speed,
      startDelay,
      showCursor: false,
      onComplete: () => {
        cursorVisible = false;
      }
    });

    response.subscribe((value) => {
      const formattedResponse = formatResponse(value);
      typed.reset();
      typed.strings = [formattedResponse];
      typed.start();
    });
  });

  const handleResponse = (event) => {
    const data = JSON.parse(event.data);
    if (data.message === message && data.response !== '') {
      response.set(data.response);
    }
  };

  onDestroy(() => {
    eventSource.close();
  });

  function getRandomStartDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function formatResponse(response) {
    response = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    response = response.replace(
      /^!\[(.*?)\]\(((?!_).+?)\)$/gm,
      '<img alt="$1" src="$2" height=200 weight=200 /> <br />'
    );

    response = response.replace(
      /(^|\s)(https?:\/\/[^\s]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>'
    );

    response = response.replace(/_([^_]+)_/g, '<u>$1</u>');

    response = response.replace(/- (\S+)/g, '<br /> <strong class="bold"><span unselectable="on" onselectstart="return false;">•</span> $1</strong>');

    return response;
  }
</script>

<main>
  <h1 class="bold non-select">PsyAI Live Response</h1>

  <div>
    <input type="text" bind:value={message} placeholder="Type your message..." />
    <button on:click={sendMessage}>Send</button>
  </div>

  <div>
    <h2>Response:</h2>
    <div class="terminal-text">
      <span id="response-wrapper"></span>
      {#if $response}
        <span id="cursor" class="cursor"></span>
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    align-self: center;
    padding: 2rem;
  }

  input,
  button {
    margin-top: 1rem;
    background-color: #000;
    color: #0f0;
  }

  button:focus {
    background-color: #0f0;
    color: #000;
  }

  .bold {
    font-weight: 900;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  .non-select {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .terminal-text {
    font-family: 'Courier New', Courier, monospace;
    border: 1px solid #ccc;
    padding: 0.5rem;
    min-height: 15px;
    width: 120%;
    background-color: #000;
    color: #0f0;
    position: relative;
    overflow: hidden;
    text-align: left;
    align-items: left;
    align-self: left;
  }

  .cursor {
    position: absolute;
    width: 0.5rem;
    height: 1rem;
    background-color: #0f0;
    animation: cursor-blink-animation 0.9s infinite;
    opacity: 1;
  }

  @keyframes cursor-blink-animation {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>
