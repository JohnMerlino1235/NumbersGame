import React, {useState} from 'react';
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";
import {
  TableBuilder,
  TableBuilderColumn,
} from 'baseui/table-semantic';
import {Card} from 'baseui/card';


export default function NumberTable(randomNumber) {
  const [updatedData, setUpdatedData] = useState(false);
  const [data, setData] = useState([
    {
      foo: 10,
      space: 1,
      value: 17,
      selected: true,
    },
    {
      foo: 10,
      space: 2,
      value: 17,
      selected: true,
    },
    {
        space: 3,
        value: 17,
    },
    {
        space: 4,
        value: 17,
      },
      {
        space: 5,
        value: 17,
      },
      {
            space: 6,
          value: 17,
        },
      {
        space: 7,
        value: 17,
      },
      {
        space: 8,
        value: 17,
      },
      {
            space: 9,
          value: 17,
        },
      {
        space: 10,
        value: 17,
      },
      {
        space: 11,
        value: 17,
      },
      {
            space: 12,
          value: 17,
        },
      {
        space: 13,
        value: 17,
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
        selected: true,
      },
      {
        space: 20,
        value: 0,
      },      
  ]);

  React.useEffect(() => {
    if(updatedData) {
        setUpdatedData(false);
    }
  },[updatedData])

  function setRow(index) {
    if(data[index-1] && data[index-1].value === 0) {
        data[index-1].value = randomNumber.randomNumber;
        setData(data);
        setUpdatedData(true);
    }
  }
  return (
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
  );
}