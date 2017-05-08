import React, { Component } from 'react';

const Icons = [
  'b-icon-remove-from-group__sprite',
  'b-icon-comments__sprite',
  'b-icon-design-critique__sprite',
  'b-icon-plus-square__sprite',
  'b-icon-unarchive__sprite',
  'b-icon-dots__sprite',
  'b-icon-change-project-group-3__sprite',
  'b-icon-duplicate__sprite',
  'b-icon-archive-2__sprite',
  'b-icon-folder-alt__sprite',
  'b-icon-add-note__sprite',
  'b-icon-email-3__sprite',
  'b-icon-email-preview__sprite',
  'b-icon-email-2__sprite',
  'b-icon-email__sprite',
  'b-icon-email-for-approval__sprite',
  'b-icon-approval-2__sprite',
  'b-icon-approval__sprite',
  'b-icon-add-sth-sb__sprite',
  'b-icon-automation__sprite',
  'b-icon-calendar__sprite',
  'b-icon-team-settings-2__sprite',
  'b-icon-team-settings__sprite',
  'b-icon-save-as-email-template-2__sprite',
  'b-icon-save-as-email-template__sprite',
  'b-icon-back-to-video-tutorials__sprite',
  'b-icon-video-tutorials__sprite',
  'b-icon-emoji__sprite',
  'b-icon-schedule-auto-reminder__sprite',
  'b-icon-change-project-group-2__sprite',
  'b-icon-change-project-group__sprite',
  'b-icon-wireframe__sprite',
  'b-icon-new-project__sprite',
  'b-icon-create-project__sprite',
  'b-icon-archive__sprite',
  'b-icon-share__sprite',
  'b-icon-play__sprite',
  'b-icon-edit__sprite',
  'b-icon-share-projects__sprite',
  'b-icon-arrow-down__sprite',
  'b-icon-status-progress__sprite',
  'b-icon-search__sprite',
  'b-icon-settings__sprite',
  'b-icon-question-mark__sprite',
  'b-icon-add-member__sprite'
];


export default class pngSprite extends Component {

  render() {
    return(
      <ul className='b-icons-list'>
     {Icons.map((item) => {
       return(
         <li key={item}>
          <span className= { item + ' icon__sprite_svg' } />
         </li>
       )
      })}
      </ul>
    )
  }
}
