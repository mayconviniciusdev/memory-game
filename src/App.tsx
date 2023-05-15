import { useEffect, useState } from 'react';
import * as styles from './app.styles';

import logoImage from './assets/devmemoryLogo.png';
import restartIcon from './assets/restart.svg';

import { InfoItem } from './components/infoItem';
import { Button } from './components/button';
import { GridItem } from './components/gridItem';

import { gridItemsTypes } from './types/gridItemsTypes';
import { items } from './data/items'
import { formatTimeElapsed } from './helpers/formatTimeElapsed';


const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<gridItemsTypes[]>([])

  // resetting and creating game grid on initial render.
  useEffect(() => resetAndCreateGrid(), []);

  // creating timer.
  useEffect(() => {
    const timer = setInterval(() => 
      { if (playing) setTimeElapsed(timeElapsed + 1); }, 1000);
        return () => clearInterval(timer); }, 
        [playing, timeElapsed]);  

  // checking if two grid items are shown.
  useEffect(() => {
    if(shownCount === 2) 
    { let opened = gridItems.filter(item => item.shown === true);
        if(opened.length === 2) 
        
        { // if both are equal, make every "shown" permanent.
          let tempGrid = [...gridItems];

          if(opened[0].item === opened[1].item) 
          { for(let i in tempGrid) 
            { if(tempGrid[i].shown) 
              {tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;} } 
            
            setGridItems(tempGrid);
            setShownCount(0); }

          else 
          { // if they are not equal, close all "shown"
            setTimeout(() => {
              let tempGrid = [...gridItems];
              for(let i in tempGrid) {tempGrid[i].shown = false;}

              setGridItems(tempGrid);
              setShownCount(0); 
            }, 1000) }
  
          setMoveCount(moveCount => moveCount + 1)
        } } }, [shownCount, gridItems]);

  // verifying if the game is over
  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)) 
      {setPlaying(false)} }, 
      [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    // resetting the game grid
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // creating the grid
    let tempGrid: gridItemsTypes[] = [];
    for(let i = 0; i < (items.length * 2); i++)
    {tempGrid.push({ item: null, shown: false, permanentShown: false });}

    // filling in the grid
    for(let w = 0; w < 2; w++) {
      for(let i = 0; i < items.length; i++) {
        let pos = -1;

        while(pos < 0 || tempGrid[pos].item !== null) 
        {pos = Math.floor(Math.random() * (items.length * 2));}
        
        tempGrid[pos].item = i; } }

    // displaying the grid and starting the game
    setGridItems(tempGrid);
    setPlaying(true);}

    const handleItemClick = (index: number) => {
      if(playing && index !== null && shownCount < 2) {
        let tempGrid = [...gridItems];

        if(tempGrid[index].permanentShown === false && tempGrid[index].shown === false)
        {tempGrid[index].shown = true;
        setShownCount(shownCount + 1);}

        setGridItems(tempGrid);
      }}

  return (
    <styles.AppContainer>
      <styles.container>
      <styles.infoArea>
        <styles.logo>
          <img src={logoImage} width='200px'></img>
        </styles.logo>

        <styles.info>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)}/>
          <InfoItem label="Movimentos" value={moveCount.toString()}/>
        </styles.info>

        <Button 
        label='REINICIAR'
        icon={restartIcon}
        onclick={resetAndCreateGrid}/>
      </styles.infoArea>

      <styles.gridArea>
        <styles.grid>
          {gridItems.map((item, index) => (
            <GridItem
            key={index}
            item={item}
            onClick={() => handleItemClick(index)}/>
          ))}
        </styles.grid>
      </styles.gridArea>
    </styles.container>
    </styles.AppContainer>
  );
}

export default App;