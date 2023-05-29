import React, {useState} from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Header } from 'baseui/accordion/styled-components';
import ProgressBarComponent from './components/progressBar';
import RulesComponent from './components/rules';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import { Button, KIND } from "baseui/button";
import {
  TableBuilder,
  TableBuilderColumn,
} from 'baseui/table-semantic';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const initialData = [
  {
    space: 1,
    value: 0,
  },
  {
    space: 2,
    value: 0,
  },
  {
    space: 3,
    value: 0,
  },
  {
    space: 4,
    value: 0,
  },
  {
    space: 5,
    value: 0,
  },
  {
    space: 6,
    value: 0,
  },
  {
    space: 7,
    value: 0,
  },
  {
    space: 8,
    value: 0,
  },
  {
    space: 9,
    value: 0,
  },
  {
    space: 10,
    value: 0,
  },
  {
    space: 11,
    value: 0,
  },
  {
    space: 12,
    value: 0,
  },
  {
    space: 13,
    value: 0,
  },
  {
    space: 14,
    value: 0,
  },
  {
    space: 15,
    value: 0,
  },
  {
    space: 16,
    value: 0,
  },
  {
    space: 17,
    value: 0,
  },
  {
    space: 18,
    value: 0,
  },
  {
    space: 19,
    value: 0,
  },
  {
    space: 20,
    value: 0,
  },      
];

function App() {
  const [continueGame, setContinueGame] = React.useState(true);
  const [randomNumber, setRandomNumber] = React.useState(0);
  const [updatedData, setUpdatedData] = useState(false);
  const [generateNewRandomNumber, setGenerateNewRandomNumber] = useState(false);
  const [playerProgress, setPlayerProgress] = useState(0);
  const [data, setData] = useState([
    {
      space: 1,
      value: 0,
    },
    {
      space: 2,
      value: 0,
    },
    {
      space: 3,
      value: 0,
    },
    {
      space: 4,
      value: 0,
    },
    {
      space: 5,
      value: 0,
    },
    {
      space: 6,
      value: 0,
    },
    {
      space: 7,
      value: 0,
    },
    {
      space: 8,
      value: 0,
    },
    {
      space: 9,
      value: 0,
    },
    {
      space: 10,
      value: 0,
    },
    {
      space: 11,
      value: 0,
    },
    {
      space: 12,
      value: 0,
    },
    {
      space: 13,
      value: 0,
    },
    {
      space: 14,
      value: 0,
    },
    {
      space: 15,
      value: 0,
    },
    {
      space: 16,
      value: 0,
    },
    {
      space: 17,
      value: 0,
    },
    {
      space: 18,
      value: 0,
    },
    {
      space: 19,
      value: 0,
    },
    {
      space: 20,
      value: 0,
    },      
  ]);

  React.useEffect(() => {
    if(updatedData) {
        setUpdatedData(false);
        setContinueGame(checkGameOver());
    }
    if(generateNewRandomNumber) {
      generateRandomNumber();
      setGenerateNewRandomNumber(false);
    }
  },[updatedData])

  function checkValidPlacement(index) {
    //if index is 0
    if(index-1 === 0 && (randomNumber < data[index]?.value || data[index]?.value === 0)) {
      for(let i = index; i < 20; i++) {
        if(!checkValidPlacement(i)) {
          return false
        }
      }
      return true
    }
    //if index is 19
    if(index-1 === 19 && randomNumber > data[index-2]?.value) {
      for(let i = index; i < 20; i++) {
        if(!checkValidPlacement(i)) {
          return false
        }
      }
      return true
    }

    // return true if random number is greater than previous index and less than next index
    if(data[index-2]?.value < randomNumber && randomNumber < data[index]?.value) {
      for(let i = index; i < 20; i++) {
        if(!checkValidPlacement(i)) {
          return false
        }
      }
      return true
    }

    // return true if random number is greater than previous index and next index is 0
    if(data[index-2]?.value < randomNumber && data[index]?.value === 0) {
      for(let i = index; i < 20; i++) {
        if(!checkValidPlacement(i)) {
          return false
        }
      }
      return true
    }
    
    return false
  }

  function checkGameOver() {
    for(const row in data) {
      if(checkValidPlacement(row.space)) {
        return false;
        }
    }
    return true;
  }

  function setRow(index) {
    if(data[index-1] && data[index-1].value === 0 && checkValidPlacement(index)) {
        data[index-1].value = randomNumber;
        setData(data);
        setUpdatedData(true);
        setGenerateNewRandomNumber(true);
        setPlayerProgress(playerProgress + 1);
    }
  }

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 999) + 1)
  }

  function clearBoard() {
    setData(initialData);
    setContinueGame(true);
    setRandomNumber(0);
    setPlayerProgress(0);
  }
  
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Header> The Numbers Game! </Header>
        </Centered>
        <RulesComponent />
        <ProgressBarComponent count={playerProgress} />
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
      <Card
          overrides={{Root: {style: {width: '328px'}}}}
          title={`Clear`}
        >
        <StyledBody>
          Clear the board to try again!
        </StyledBody>
        <StyledAction>
          <Button overrides={{BaseButton: {style: {width: '100%'}}}} onClick={clearBoard}>
            Try Again
          </Button>
        </StyledAction>
      </Card>
      <Card>
        <TableBuilder data={data}>
        <TableBuilderColumn header="Slot">
            {(row) => row.space}
        </TableBuilderColumn>
        <TableBuilderColumn header="Number">
            {(row) => 
            <Button kind={KIND.tertiary} onClick={() => setRow(row.space)}>
                {row.value}
            </Button>}
        </TableBuilderColumn>
        </TableBuilder>
    </Card>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
