import React, { Component, PropTypes } from 'react';
import shapes from './shapes';

const { number, object, string } = PropTypes;

export class Icon extends Component {
    render() {
        const {
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
            className: `svg-icon ${icon}`,
            viewBox: '0 0 24 24',
        };

        return (<svg {...attrs}></svg>);
    }
}

Icon.propTypes = {
    icon: string,
    size: number,
    custom: string,
    style: object,
};

export {
  Icon,
  shapes,
};
