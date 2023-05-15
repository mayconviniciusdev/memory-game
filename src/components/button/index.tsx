import * as styles from './styles';

type Props = {
label: string;
icon?: any;
onclick: React.MouseEventHandler<HTMLDivElement>;}

export const Button = ({label, icon, onclick}: Props) => {
    return (
        <styles.container onClick={onclick}>
            {icon && 
                <styles.iconArea>
                    <styles.icon src={icon}/>
                </styles.iconArea>
            }

            <styles.label>{label}</styles.label>
        </styles.container>
    );
}