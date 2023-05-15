import * as style from './styles';

type Props = {
label: string;
value: string;}

export const InfoItem = ({label, value}: Props) => {
    return (
        <style.container>
            <style.label>{label}</style.label>
            <style.value>{value}</style.value>
        </style.container>
    );
}