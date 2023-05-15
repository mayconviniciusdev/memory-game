import { gridItemsTypes } from '../../types/gridItemsTypes';
import * as styles from './styles';

import logo from '../../assets/logoSF.png';

import { items } from '../../data/items';

type Props = {
item: gridItemsTypes,
onClick: () => void }

export const GridItem = ({item, onClick}: Props) => {
    return (
        <styles.container 
        shownBackground={item.permanentShown || item.shown}
        onClick={onClick}>
            {item.permanentShown  === false && item.shown === false &&
                <styles.icon src={logo} opacity={.1}/> }

            {(item.permanentShown || item.shown) &&  item.item !== null &&
                <styles.icon src={items[item.item].icon} />
            }   
        </styles.container>
    )
}