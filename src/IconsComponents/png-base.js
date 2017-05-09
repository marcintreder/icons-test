import React, { Component } from 'react';

const Icons = ['b-icon-add-member__base',
'b-icon-add-note__base',
'b-icon-add-sth__base',
'b-icon-approval-2__base',
'b-icon-approval__base',
'b-icon-archive-2__base',
'b-icon-archive__base',
'b-icon-arrow-down__base',
'b-icon-automation__base',
'b-icon-back-to-video__base',
'b-icon-calendar__base',
'b-icon-change-project-group-2__base',
'b-icon-change-project-group-3__base',
'b-icon-change-project-group__base',
'b-icon-comments__base',
'b-icon-create-project__base',
'b-icon-design-critique__base',
'b-icon-dots__base',
'b-icon-duplicate__base',
'b-icon-edit__base ',
'b-icon-email-2__base',
'b-icon-email-3__base',
'b-icon-email-approval__base',
'b-icon-email-preview__base ',
'b-icon-email__base',
'b-icon-emoji__base',
'b-icon-folder-alt__base',
'b-icon-new-project__base',
'b-icon-play__base',
'b-icon-plus-square__base',
'b-icon-question-mark__base',
'b-icon-remove-from-group__base',
'b-icon-save-as-email-template-2__base',
'b-icon-save-as-email-template__base',
'b-icon-schedule-auto-reminder__base',
'b-icon-search__base',
'b-icon-settings__base',
'b-icon-share-projects__base',
'b-icon-share__base',
'b-icon-status-progress__base',
'b-icon-team-settings-2__base',
'b-icon-team-settings__base',
'b-icon-unarchive__base',
'b-icon-video-tutorials__base',
'b-icon-wireframe__base'
]

export default class PngBase extends Component {

  render() {
    return(
      <ul className='b-icons-list'>
     {Icons.map((item) => {
       return(
         <li key={item} className={item} />
       )
      })}
      </ul>
    )
  }
}
