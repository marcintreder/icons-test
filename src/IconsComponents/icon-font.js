import React, { Component } from 'react';

const Icons = [
  'b-icon-remove-from-group',
  'b-icon-comments',
  'b-icon-design-critique',
  'b-icon-plus-square',
  'b-icon-unarchive',
  'b-icon-dots',
  'b-icon-change-project-group-3',
  'b-icon-duplicate',
  'b-icon-archive-2',
  'b-icon-folder-alt',
  'b-icon-add-note',
  'b-icon-email-3',
  'b-icon-email-preview',
  'b-icon-email-2',
  'b-icon-email',
  'b-icon-email-for-approval',
  'b-icon-approval-2',
  'b-icon-approval',
  'b-icon-add-sth-sb',
  'b-icon-automation',
  'b-icon-calendar',
  'b-icon-team-settings-2',
  'b-icon-team-settings',
  'b-icon-save-as-email-template-2',
  'b-icon-save-as-email-template',
  'b-icon-back-to-video-tutorials',
  'b-icon-video-tutorials',
  'b-icon-emoji',
  'b-icon-schedule-auto-reminder',
  'b-icon-change-project-group-2',
  'b-icon-change-project-group',
  'b-icon-wireframe',
  'b-icon-new-project',
  'b-icon-create-project',
  'b-icon-archive',
  'b-icon-share',
  'b-icon-play',
  'b-icon-edit',
  'b-icon-share-projects',
  'b-icon-arrow-down',
  'b-icon-status-progress',
  'b-icon-search',
  'b-icon-settings',
  'b-icon-question-mark',
  'b-icon-add-member'
];


export default class IconFont extends Component {

  render() {
    return(
      <ul className='b-icons-list'>
     {Icons.map((item) => {
       return(
         <li key={item}>
          <span className= { item + ' icon-font' } />
         </li>
       )
      })}
      </ul>
    )
  }
}
