import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Wrapper = styled.div`
  padding: 100px;
`;
const NavigationTest = (props: any) => {
  return (
    <Wrapper>
      <Header>PURCHASED {props.id} times!</Header>
      <Link to="/">Go Back HomePage</Link>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    id: state.PurchaseApp.id,
  };
};
export default connect(mapStateToProps, {})(NavigationTest);
