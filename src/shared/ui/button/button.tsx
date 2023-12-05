import { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.scss';

interface ButtonProps
   extends React.DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
   > {
   name?: string;
   icon?: ReactNode;
}
export const Button = (props: ButtonProps) => {
   const { name, icon, ...otherProps } = props;
   return (
      <button
         className={`button ${name && icon ? 'name-icon' : ''} ${
            name && !icon ? 'name' : ''
         } ${icon && !name ? 'icon' : ''}`}
         {...otherProps}
      >
         {name && <p>{name}</p>}
         {icon}
      </button>
   );
};
