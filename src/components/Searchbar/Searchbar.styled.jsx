import styled from "@emotion/styled";

export const Header = styled.header`
  z-index: 1;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 25x;
  padding-left: 25px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: var(--accent-color);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  max-width: 400px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 20px;
  padding-right: 4px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  font-size: 20px;
  font: inherit;
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0 15px;
  line-height: 1;
  font: inherit;
  color: #fff;
  background-color: rgb(224, 61, 20);
  border: 1px solid rgb(143, 81, 39);
  cursor: pointer;
  outline: none;
`;
