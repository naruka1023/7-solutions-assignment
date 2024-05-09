import React, { useState, useEffect } from 'react';
import { memo } from 'react';

function TodoItems(props:any) {

  return (
    <>
      <div
        key={props.index}
        className="item m-2 p-3 border rounded"
        onClick={() => {
          props.storageFlag
            ? props.moveToType(props.item, props.index)
            : props.returnToStorage(props.item);
        }}
      >
        {props.item.name}
      </div>
    </>
  );
}
export default memo(TodoItems);
