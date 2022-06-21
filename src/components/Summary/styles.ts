import styled from "styled-components";

export const Container = styled.main`
  display : grid;
  grid-template-columns: repeat(3 ,1fr);
  gap: 2rem;
  margin-top: -10rem;

  div { 
      
      padding: 1.5rem 2rem ;
      background: var(--shape);
      border-radius: 0.25rem;
      color: var(--text-title);

    

  header{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  strong{
      margin-top: 1rem;
      font-size:2rem;
      font-weight: 500;
      line-height: 3rem;
  }
  
  &.highlit-background {
      background: var(--green);
      color : white;
  }

}
`;