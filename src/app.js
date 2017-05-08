import React, { Component } from 'react';
//import PngBase from './IconsComponents/png-base.js' // png loaded through base64 links
//import Png from './IconsComponents/png.js' // png loaded as individual files
//import SvgBase from './IconsComponents/svg-base.js' // svg loaded through base64 links
//import Svg from './IconsComponents/svg.js' // svg loaded as individual files
// import SvgInline from './IconsComponents/svg-inline.js' // svg loaded as individual files
// import SvgIconsComponent from './IconsComponents/svg-icon-component.js'
//import PngSprite from './IconsComponents/png-sprite.js'
//import SvgSprite from './IconsComponents/svg-sprite.js'
import IconFont from './IconsComponents/icon-font.js'


export default class App extends Component {

  render() {

    return(
      <div className='b-wrapper'>
        <IconFont />
      </div>
    )
  }
}
