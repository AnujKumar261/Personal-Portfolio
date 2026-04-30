import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;

    scroll-padding-top: 10rem;
  }

  /* ================= RESET ================= */

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #fff;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #fff;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
  }

  button:hover, .button:hover {
    filter: brightness(0.8);
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  .logo {
    font-size: 3rem;
    color: #fff;
  }

  /* ================= LIGHT MODE FIX ================= */

  body.light {
    transition: 0.5s;
    background-color: #f5f5f5;
    color: var(--black);
  }

  body.light .logo {
    color: var(--black);
  }

  body.light header.header-fixed {
  background-color: #f5f5f5cc !important;
  backdrop-filter: blur(6px);
}

  body.light header.header-fixed {
    transition: 0.5s;
    background-color: #f5f5f550;
  }

  body.light header.header-fixed a {
    color: black;
  }

  body.light header.header-fixed .menu,
  body.light header.header-fixed .menu:before,
  body.light header.header-fixed .menu:after {
    background-color: var(--black);
  }

  body.light footer.footer {
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--black);
  }

  body.light form input,
  body.light form textarea {
    border: 1px solid var(--black);
    color: var(--black);
  }

  body.light form input::placeholder,
  body.light form textarea::placeholder {
    color: var(--black);
  }

  /* ================= TOAST FIX (IMPORTANT) ================= */

  .Toastify__toast-container {
    z-index: 999999 !important;
    position: fixed !important;
  }

  .Toastify__toast {
    opacity: 1 !important;
    filter: none !important;
    backdrop-filter: none !important;
  }
`
