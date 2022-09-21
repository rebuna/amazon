import React from 'react'
import {MultiSelectComponent} from '@syncfusion/ej2-react-dropdowns'

function Dropdown() {
    const fruitData = ['banana', 'apple', 'mango', 'strawberry', 'gripe']
  return (
    <div>
      <select>
        <option>apple</option>
        <option>banaana</option>
        <option>gripe</option>
        <option>orange</option>
      </select>
      {/* <MultiSelectComponent
        placeholder="your favorite fruits"
        dataSource={fruitData}
      ></MultiSelectComponent> */}
    </div>
  );
}

export default Dropdown