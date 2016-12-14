import React, { Component, PropTypes } from 'react';
import shapes from './shapes';

const { number, object, string } = PropTypes;

class Icon extends Component {
    render() {
        const {
            className = '',
            icon = 'error',
            size = 25,
            custom,
            style,
        } = this.props;

        const icons = custom ? custom : shapes[icon];

        /* svg container props attrs */
        const attrs = {
            style,
            dangerouslySetInnerHTML: { __html: icons },
            xmlns: 'http://www.w3.org/2000/svg',
            width: size, height: size,
            className: `svg-icon ${icon} ${className}`,
            viewBox: '0 0 24 24',
        };

        return (<svg {...attrs}></svg>);
    }
}

Icon.propTypes = {
    className: string,
    icon: string,
    size: number,
    custom: string,
    style: object,
};

export {
  Icon,
  shapes,
};
