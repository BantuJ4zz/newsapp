import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Technology from './Technologie';
import Health from './Sante';
import General from './General';

export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Technologie">
            <Technologie />
          </Tab>
          <Tab heading="Sante">
            <Health />
          </Tab>
          <Tab heading="General">
            <Health />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}