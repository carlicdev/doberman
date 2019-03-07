import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family: 'Cormorant Garamond', serif !important;
    background: transparent;
    border: 0.05rem solid var(--taupe);
    color:var(--taupe);
    border-radius: 0.1rem;
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all .5s ease-in-out;
   &:hover {
       background:var(--taupe);
       color: var(--green);
   }
  &:focus {
      outline: none;
  }
`;