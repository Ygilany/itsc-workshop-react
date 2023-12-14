import { FC } from "react";

interface InstitutionAvatarProps {
    name: string;
    img: string;
}

export const InstitutionAvatar: FC<InstitutionAvatarProps> = ({ name, img }) => {
    return (
        <div>
            <img src={img} alt={name} width={`150px`} />
        </div>
    );
};