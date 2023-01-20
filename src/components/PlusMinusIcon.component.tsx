import React from 'react';
import { AddIconOutline, MinusIconOutline } from '../assets/icons/Fluent';

export interface IPlusMinusIcon {}

const PlusMinusIcon: React.FC<IPlusMinusIcon> = ({ }) => {
  return (
    <div className='inline -mb-2'>
      <AddIconOutline color='#334155' size={20} />
      <MinusIconOutline color='#334155' size={20} className='-mt-[10px]' />
    </div>
  )
}
export default PlusMinusIcon;