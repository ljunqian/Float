import React from 'react';
import { IInputProps } from '../Input';
export interface ITextAreaProps extends IInputProps {
    /**
     * Maps to react-native TextInput's numberOfLines.
     */
    totalLines?: number;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ITextAreaProps & React.RefAttributes<unknown>>>;
export default _default;
