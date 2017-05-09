import React, { Component } from 'react';

export default class Icon extends Component {

  render() {
    let svgObj = this.getSVGcontent(this.props.svg);

    let svg = svgObj.svg;
    let viewBox = svgObj.viewBox;

    return(
        <svg
        version = "1.1" xmlns="http://www.w3.org/2000/svg"
        width = { this.props.width }
        height = { this.props.height }
        fill = { this.props.color }
        viewBox = { viewBox ? viewBox : '' }

        className='b-icon-react'

        dangerouslySetInnerHTML={{__html: `${svg}` }}
        />
    )
  }

  getSVGcontent(svg) {
    svg = JSON.stringify(this.props.svg);
    let viewBox = JSON.stringify(svg.match(/viewBox=\\"([\s\S]*?)"/g));
    viewBox = viewBox.replace((/\\|\"|\[|]|viewBox=/g), '');

    svg = svg.substring(svg.indexOf('>') + 1)
          .replace(/\\/g, '');
    svg = svg.substring(0, svg.indexOf('</svg>'))

    if(svg.indexOf('fill') > -1){
        svg =  svg.replace(/fill="([\s\S]*?)\"/g, `fill=${this.props.color}`);
      }

      return { 'svg': svg, 'viewBox': viewBox};
  }
}
