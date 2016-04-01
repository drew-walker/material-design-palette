[![Build Status](https://travis-ci.org/drew-walker/material-design-palette.svg?branch=master)](https://travis-ci.org/drew-walker/material-design-palette)

# Usage

## ES6

import MaterialDesignPalette from 'material-design-palette';

export default class SomeReactComponent extends Component {
    render() {
        return <Card titleColor={MaterialDesignPalette.color.blue400} />
    }
}

## CommonJS

var MaterialDesignPalette = require('material-design-palette');

module.exports = React.createClass({
    render: function() {
        return <Card titleColor={MaterialDesignPalette.color.blue400} />
    }
})

# Palette

![Palette](https://raw.githubusercontent.com/drew-walker/material-design-palette/master/palette.png)
