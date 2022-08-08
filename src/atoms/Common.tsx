import styled from "styled-components";

export const AcceptWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 2px solid;
  border-color: rgb(255, 255, 255, 0.25);
  background: rgb(224, 224, 224, 0.9);
  padding: 10px 0;
  color: rgb(50, 50, 50);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1.15em;
`;

export const Description = styled.div``;

export const AcceptButton = styled.button`
  cursor: pointer;
  margin: 10px 0;
  background: rgb(200, 200, 200, 0.8);
  padding: 4px;
  border: 2px solid;
  border-color: rgb(180, 180, 180);
  cursor: pointer;
  border-radius: 3px;
  color: rgb(15, 15, 15);

  :hover {
    background: rgb(200, 200, 200);
  }

  :active {
    background: rgb(15, 15, 15);
    color: rgb(200, 200, 200);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;
