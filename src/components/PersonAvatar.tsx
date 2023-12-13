import { FC } from "react";
import { PersonProps } from "./Person";


export const PersonAvatar: FC<PersonProps> = ({ name, img }) => {
    return (
        <div>
            <img src={img} alt={name} />
        </div>
    );
};