import { FC } from 'react';
import BootstrapButton from 'react-bootstrap/Button';

interface ButtonProps {
    buttonText: string;
    counter: number;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({buttonText, counter, onClick}) => {
    return <BootstrapButton variant='warning' onClick={() => onClick()} >
        Count is {counter} - {buttonText}
    </BootstrapButton>;
};