import * as React from 'react';
import {ProgressBar} from 'baseui/progress-bar';

export default function ProgressBarComponent({count}) {
    console.log(count);
  return (
    <ProgressBar
      minValue={0}
      maxValue={20}
      value={count}
      overrides={{
        BarProgress: {
          style: ({$theme, $count}) => {
            return {
              ...$theme.typography.font350,
              backgroundColor: $theme.colors.positive,
              color: $theme.colors.mono200,
              position: 'relative',
              ':after': {
                position: 'absolute',
                content: `"${(count / 20) * 100}%"`,
                right: '10px',
              },
            };
          },
        },
        Bar: {
          style: ({$theme}) => ({
            height: $theme.sizing.scale800,
          }),
        },
      }}
    />
  );
}
