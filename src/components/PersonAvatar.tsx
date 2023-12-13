import { FC } from "react";

interface PersonAvatarProps {
    name: string;
    img: string;
}

export const PersonAvatar: FC<PersonAvatarProps> = ({ name, img }) => {
    return (
        <div>
            <img src={img} alt={name} />
        </div>
    );
};