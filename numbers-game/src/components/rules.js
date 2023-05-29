import * as React from 'react';
import {Accordion, Panel} from 'baseui/accordion';

const rules =
  'The number game is a famous tiktok challenge; you have to choose the correct order of 20 numbers. If you choose the right order and you can put in order all the 20 randomic numbers you win!';

export default function RulesComponent() {
  return (
    <Accordion>
      <Panel title="Click for the rules!">{rules}</Panel>
    </Accordion>
  );
}
