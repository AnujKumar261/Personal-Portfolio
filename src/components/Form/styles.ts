import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    /* ✅ FIX: prevent toast hiding issues */
    position: relative;
    z-index: 1;

    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: 1px solid #fff;
      background: transparent;
      color: white;
      font-weight: 600;
    }

    textarea {
      height: 20rem;
      resize: none;
      overflow-y: auto;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    color: #fbfbfb;
  }
`