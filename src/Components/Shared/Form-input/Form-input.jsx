import React from "react";

import { Grid, Icon } from "semantic-ui-react";
import Styled from "styled-components";

const Wrapper = Styled.div``;
const Label = Styled.label`
font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 88%;
`;
const InputGroupWrap = Styled.div`
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: stretch;
align-items: stretch;
width: 100%;
`;
const InputIcon = Styled.div`
height: calc(3.4rem + 2px);
position: absolute;
z-index: 2;
display: block;
width: 40px;
top: 0;
bottom: 0;
left: 0;
    && i {
        padding: calc(1rem + 2px);
        border-left: 2px solid #6730e3;
        position: absolute;
        font-size: 18px;
        height: calc(3.7rem + 2px);
        border-radius: 4px;
    }
`;
const Input = Styled.input`
    position: relative;
    -ms-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    text-indent: 35px;
    padding: .375rem .75rem;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    padding: .975rem 0.85rem;
    height: calc(2.98em + .75rem + 2px);
    background: #fff;

&&:focus {
    border-color: #6730e3;
    outline: none;
    box-shadow: none;
    color: #495057;
    background-color: #fff;
}

`;

const FormInput = ({ handleChange, label, icon, ...otherProps }) => (
  <Wrapper>
    {label ? <Label>{label}</Label> : null}
    <InputGroupWrap>
      {icon ? (
        <InputIcon>
          <Icon name={icon} />
        </InputIcon>
      ) : null}
      <Input autocomplete="on" onChange={handleChange} {...otherProps}></Input>
    </InputGroupWrap>
  </Wrapper>
);

export default FormInput;
