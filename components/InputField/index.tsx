import styles from './styles.module.css'
import EyeOn from './EyeOn.svg'
import EyeOff from './EyeOff.svg'
import { useState } from 'react';

type Props = {
    color: string;
    placeholder: string;
    value: string;
    onChange: (newValue: string) => void;
    password?: boolean
}

export const InputField = ({color, placeholder, value, onChange, password }: Props) => {
    const [focused, setFocused] = useState(false);

    return(
        <div 
            className={styles.container}
            style={{
                borderColor: focused ? color : '#F9F9FB'
            }}
        >
            <input 
                type={password ? 'password' : 'text'} 
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    );
}