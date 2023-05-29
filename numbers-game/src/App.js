import * as React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Header } from 'baseui/accordion/styled-components';
import ProgressBarComponent from './components/progressBar';
import RulesComponent from './components/rules';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {
  const [continueGame, setContinueGame] = React.useState(true);
  const [randomNumber, setRandomNumber] = React.useState(0);

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 999) + 1)
  }
  
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Header> The Numbers Game! </Header>
        </Centered>
        <RulesComponent />
        <ProgressBarComponent count={10} />
        <Card
          overrides={{Root: {style: {width: '328px'}}}}
          title={`${randomNumber}`}
        >
        <StyledBody>
          {continueGame ? `Place ${randomNumber} somewhere!` : `No space for ${randomNumber}! Better luck next time!`}
        </StyledBody>
        <StyledAction>
          <Button overrides={{BaseButton: {style: {width: '100%'}}}} onClick={generateRandomNumber}>
            Generate Number!
          </Button>
        </StyledAction>
      </Card>

      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
