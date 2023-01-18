import React from 'react';

export interface IVerticalDivider {}

const VerticalDivider: React.FC<IVerticalDivider> = ({ }) => {
  return (
    <div className='bg-divider-500 w-[3px] h-16'>

    </div>
  )
}
export default VerticalDivider;