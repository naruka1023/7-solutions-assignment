'use client';

import React, { useState, useEffect, useRef } from 'react';
import data from './todoData.tsx';
import TodoItems from './todoItems.tsx';
import { toDoItem } from './model.tsx';

interface timeOutSessions{
  [key:string]: ReturnType<typeof setTimeout>
}
export default function ToDo() {

  const [storage, setStorage] = useState<toDoItem[]>([]);
  const [vegetableType, setVegetableType] = useState<toDoItem[]>([]);
  const [fruitType, setFruitType] = useState<toDoItem[]>([]);
  const [timeOutSessions, setTimeOutSessions] = useState<timeOutSessions>({});
  
  const fruitTypeRef = useRef(fruitType)
  const storageRef = useRef(storage)
  const vegetableTypeRef = useRef(vegetableType)

  useEffect(() => {
    setStorage(data);
  }, []);
  
  useEffect(() => {
    fruitTypeRef.current = fruitType
    storageRef.current = storage
    vegetableTypeRef.current = vegetableType
  });

  const moveToType = (a: toDoItem, i: number) => {
    storage.splice(i, 1);
    setStorage([...storage]);
    if (a.type == 'Fruit') {
      fruitType.push(a);
      setFruitType([...fruitType]);
    } else {
      vegetableType.push(a);
      setVegetableType([...vegetableType]);
    }
    let timeoutID = setTimeout(() => {
      storageTimeout(a);
    }, 5000);
    timeOutSessions[a.name] = timeoutID
    setTimeOutSessions({...timeOutSessions})
  };

  const storageTimeout = (a: toDoItem) => {
      let i = 0
    if (a.type == 'Fruit') {
      i = fruitTypeRef.current.indexOf(a)
      fruitTypeRef.current.splice(i, 1);
      setFruitType([...fruitTypeRef.current]);
    } else {
      i = vegetableTypeRef.current.indexOf(a)
      vegetableTypeRef.current.splice(i, 1);
      setVegetableType([...vegetableTypeRef.current]);
    }
    storageRef.current.push(a);
    setStorage([...storageRef.current]);
  };
  const returnToStorage = (a: toDoItem) => {
      let i = 0
    if(timeOutSessions[a.name] !== undefined){
      clearTimeout(timeOutSessions[a.name])
      let newSessions = {...timeOutSessions}
      delete newSessions[a.name]
      setTimeOutSessions(newSessions)
    }
    if (a.type == 'Fruit') {
      i = fruitType.indexOf(a)
      fruitType.splice(i, 1);
      setFruitType([...fruitType]);
    } else {
      i = vegetableType.indexOf(a)
      vegetableType.splice(i, 1);
      setVegetableType([...vegetableType]);
    }
    storage.push(a);
    setStorage([...storage]);
  };

  return (
      <div className="m-4 text-primary">
        <div className="row" style={{ height: '90vh' }}>
          <div className="col text-center">
            {storage.map((a, i) => {
              return (
                <TodoItems
                  item={a}
                  index={i}
                  storageFlag={true}
                  moveToType={moveToType}
                  returnToStorage={returnToStorage}
                />
              );
            })}
          </div>
          <div className="col text-center">
            <div className="border rounded h-100">
              <div className="text-center text-light bg-secondary mb-3">
                Fruits
              </div>
              {fruitTypeRef.current.map((a, i) => {
                return (
                  <TodoItems
                    item={a}
                    index={i}
                    storageFlag={false}
                    moveToType={moveToType}
                    returnToStorage={returnToStorage}
                  />
                );
              })}
            </div>
          </div>
          <div className="col text-center">
            <div className="border rounded h-100">
              <div className="text-center text-light bg-secondary mb-3">
                Vegetables
              </div>
              {vegetableTypeRef.current.map((a, i) => {
                return (
                  <TodoItems
                    item={a}
                    index={i}
                    storageFlag={false}
                    returnToStorage={returnToStorage}
                    moveToType={moveToType}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}
