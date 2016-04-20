import React, { Component, PropTypes } from 'react';
import shapes from './shapes';

const { number, object, string } = PropTypes;

export class Icons extends Component {
    render() {
        const { style, icon = 'error', size = 25 } = this.props;
        const icons = shapes[icon];

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

Icons.propTypes = {
    icon: string,
    size: number,
    style: object,
};

export {
  Icons,
  shapes,
};
