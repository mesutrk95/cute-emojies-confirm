import React from 'react';
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';

export const YourDialog = ({ show, proceed, confirmation, options }: 
    { show?: boolean, proceed?: (data: any) => void, confirmation: string, options?: any }) => (
    //   <div onHide={() => proceed(false)} show={show}>
    <div className='' >
        {confirmation}
        <button onClick={() => proceed?.(false)}>CANCEL</button>
        <button onClick={() => proceed?.(true)}>OK</button>

        options: {JSON.stringify(options)}<br />
        show: {show ? '1' : '0'}
    </div>
)

// YourDialog.propTypes = {
//     show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not.
//     proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved.
//     confirmation: PropTypes.string,  // arguments of your confirm function
//     options: PropTypes.object        // arguments of your confirm function
// }

// confirmable HOC pass props `show`, `dismiss`, `cancel` and `proceed` to your component.
export default confirmable(YourDialog);