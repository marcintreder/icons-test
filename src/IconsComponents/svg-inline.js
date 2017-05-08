import React, { Component } from 'react';

const SVG_CLASSES = [
'b-icon__add-member',
'b-icon__add-note',
'b-icon__sth-sb',
'b-icon__approval_2',
'b-icon__approval',
'b-icon__archive_2',
'b-icon__archive',
'b-icon__arrow-down',
'b-icon__automation',
'b-icon__back-to-video-tutorials',
'b-icon__calendar',
'b-icon__change-project-group_2',
'b-icon__change-project-group_3',
'b-icon__change-project-group',
'b-icon__comments',
'b-icon__create-project',
'b-icon__design-critique',
'b-icon__dots',
'b-icon__duplicate-string',
'b-icon__edit',
'b-icon__email_2',
'b-icon__email_3',
'b-icon__email-for-approval',
'b-icon__email-preview',
'b-icon__email',
'b-icon__emoji',
'b-icon__folder_alt',
'b-icon__new-project',
'b-icon__play',
'b-icon__plus-square',
'b-icon__question-mark',
'b-icon__remove-from-group',
'b-icon__save-as-email-template_2',
'b-icon__save-as-email-template',
'b-icon__schedule-auto-reminder',
'b-icon__search',
'b-icon__settings',
'b-icon__share-projects',
'b-icon__share',
'b-icon__status-progress',
'b-icon__team-settings_2',
'b-icon__team-settings',
'b-icon__unarchive',
'b-icon__video-tutorials',
'b-icon__wireframe'
];

export default class SvgInline extends Component {

  render() {
    return (
      <ul className='b-icons-list'>
     {SVG_CLASSES.map((item) => {
       return(
         <li key={item} className={item}><div className={item}></div></li>
       )
      })}
      </ul>
    )
  }
}
