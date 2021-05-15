import React, { Component } from "react"
import ContentCard from "./Card"
import styled from "styled-components"
import data from "../lib/data"

class About extends Component {
  render() {
    const {
      colorTheme
    } = this.props;

    const Container = styled.div`
      background-attachment: fixed; 
      background: ${colorTheme.colorPrimary};
      width: 100%;
      display: flex;
      flex-direction: column; 
      align-items: center;
      height: 100vh;
      position: relative;
      justify-content: center;
    ` 
    const Footer = styled.h1`
      color: #FFFFFF;
      font-family: ${colorTheme.font};
      margin:0;
      padding: 10px;
      font-size: 12px;
      position: absolute; 
      bottom: 0;
    ` 
    return (
      <Container>
        <ContentCard 
          colorTheme={colorTheme}
          description={data.about.description} 
          title={data.about.title}
          subtitle={data.about.subtitle}
          isPrimary={true}>
        </ContentCard>
        <Footer>{data.footer}</Footer>
      </Container>
    );
  }
}

export default About;
