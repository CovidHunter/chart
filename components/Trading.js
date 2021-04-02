import React, { useContext } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import { ChartContext } from '../contexts/ChartContext'; 
import uiConfig from '../config/ui';
import Trade from './Trade';

export default function Trading(){

  const [state, dispatch] = useContext(ChartContext);

  return (
    <div className='trading-container'>
      <div className='row'>
      <Dropdown
        options={state.bidAmountOptions}
        value={state.bidAmountOption}
        onChange={(e, data) => dispatch({type: 'SET_BID_AMOUNT', payload: data.value})}
      />
      <Dropdown
        options={state.bidTimeOptions}
        value={state.bidTimeOption}
        onChange={(e, data) => dispatch({type: 'SET_BID_TIME', payload: data.value})}
      />
      </div>
      <div className='row'>
        <Button
          positive
          size='mini'
          onClick={e => dispatch({type: 'ADD_TRADE', payload: 'call'})}
        >
          Call
        </Button>
        <Button
          negative
          size='mini'
          onClick={e => dispatch({type: 'ADD_TRADE', payload: 'put'})}
        >
          Put
        </Button>
      </div>
      <Trade trade={{ time:1, status: 'pending' }}/>
    </div>
  )
};
