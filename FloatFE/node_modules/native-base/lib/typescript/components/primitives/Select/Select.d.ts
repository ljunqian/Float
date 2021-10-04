import React from 'react';
import type { ISelectProps } from './types';
import type { IButtonProps } from '../Button/types';
export declare const SelectContext: React.Context<{
    onValueChange: any;
    selectedValue: any;
    _selectedItem: IButtonProps;
    _item: IButtonProps;
}>;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ISelectProps & React.RefAttributes<unknown>>>;
export default _default;
