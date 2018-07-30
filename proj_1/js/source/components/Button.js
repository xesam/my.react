import classNames from 'classnames';
import React, {PropTypes} from 'react';

function Button(props) {
    const cssclasses = classNames('Button', props.className);
    return props.href
        ? <a {...props} className={cssclasses}/>
        : <button {...props} className={cssclasses}/>;
}

Button.propTypes = {
    href: PropTypes.string
};

export default Button;