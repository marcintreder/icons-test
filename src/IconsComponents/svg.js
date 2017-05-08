import React, { Component } from 'react';

import IconAddMember from '../../assets/icons/svg/icon-add-member.svg';
import IconAddNote from '../../assets/icons/svg/icon-add-note.svg';
import IconAddSth from '../../assets/icons/svg/icon-add-sth-sb.svg';
import IconApproval2 from '../../assets/icons/svg/icon-approval-2.svg';
import IconApproval from '../../assets/icons/svg/icon-approval.svg';
import IconArchive2 from '../../assets/icons/svg/icon-archive-2.svg';
import IconArchive from '../../assets/icons/svg/icon-archive.svg';
import IconArrowDown from '../../assets/icons/svg/icon-arrow-down.svg';
import IconAutomation from '../../assets/icons/svg/icon-automation.svg';
import IconBackToVideo from '../../assets/icons/svg/icon-back-to-video-tutorials.svg';
import IconCalendar from '../../assets/icons/svg/icon-calendar.svg';
import IconChangeProjectGroup2 from '../../assets/icons/svg/icon-change-project-group-2.svg';
import IconChangeProjectGroup3 from '../../assets/icons/svg/icon-change-project-group-3.svg';
import IconChangeProjectGroup from '../../assets/icons/svg/icon-change-project-group.svg';
import IconComments from '../../assets/icons/svg/icon-comments.svg';
import IconCreateProject from '../../assets/icons/svg/icon-create-project.svg';
import IconDesignCritique from '../../assets/icons/svg/icon-design-critique.svg';
import IconDots from '../../assets/icons/svg/icon-dots.svg';
import IconDuplicate from '../../assets/icons/svg/icon-duplicate.svg';
import IconEdit from '../../assets/icons/svg/icon-edit.svg';
import IconEmail2 from '../../assets/icons/svg/icon-email-2.svg';
import IconEmail3 from '../../assets/icons/svg/icon-email-3.svg';
import IconEmailApproval from '../../assets/icons/svg/icon-email-for-approval.svg';
import IconEmailPreview from '../../assets/icons/svg/icon-email-preview.svg';
import IconEmail from '../../assets/icons/svg/icon-email.svg';
import IconEmoji from '../../assets/icons/svg/icon-emoji.svg';
import IconFolderAlt from '../../assets/icons/svg/icon-folder-alt.svg';
import IconNewProject from '../../assets/icons/svg/icon-new-project.svg';
import IconPlay from '../../assets/icons/svg/icon-play.svg';
import IconPlusSquare from '../../assets/icons/svg/icon-plus-square.svg';
import IconQuestionMark from '../../assets/icons/svg/icon-question-mark.svg';
import IconRemoveFromGroup from '../../assets/icons/svg/icon-remove-from-group.svg';
import IconSaveAsEmailTemplate2 from '../../assets/icons/svg/icon-save-as-email-template-2.svg';
import IconSaveAsEmailTemplate from '../../assets/icons/svg/icon-save-as-email-template.svg';
import IconScheduleAutoReminder from '../../assets/icons/svg/icon-schedule-auto-reminder.svg';
import IconSearch from '../../assets/icons/svg/icon-search.svg';
import IconSettings from '../../assets/icons/svg/icon-settings.svg';
import IconShareProjects from '../../assets/icons/svg/icon-share-projects.svg';
import IconShare from '../../assets/icons/svg/icon-share.svg';
import IconStatusProgress from '../../assets/icons/svg/icon-status-progress.svg';
import IconTeamSettings2 from '../../assets/icons/svg/icon-team-settings-2.svg';
import IconTeamSettings from '../../assets/icons/svg/icon-team-settings.svg';
import IconUnarchive from '../../assets/icons/svg/icon-unarchive.svg';
import IconVideoTutorials from '../../assets/icons/svg/icon-video-tutorials.svg';
import IconWireframe from '../../assets/icons/svg/icon-wireframe.svg';

const Icons = ['../../assets/icons/svg/icon-add-member.svg',
'../../assets/icons/svg/icon-add-note.svg',
'../../assets/icons/svg/icon-add-sth-sb.svg',
'../../assets/icons/svg/icon-approval-2.svg',
'../../assets/icons/svg/icon-approval.svg',
'../../assets/icons/svg/icon-archive-2.svg',
'../../assets/icons/svg/icon-archive.svg',
'../../assets/icons/svg/icon-arrow-down.svg',
'../../assets/icons/svg/icon-automation.svg',
'../../assets/icons/svg/icon-back-to-video-tutorials.svg',
'../../assets/icons/svg/icon-calendar.svg',
'../../assets/icons/svg/icon-change-project-group-2.svg',
'../../assets/icons/svg/icon-change-project-group-3.svg',
'../../assets/icons/svg/icon-change-project-group.svg',
'../../assets/icons/svg/icon-comments.svg',
'../../assets/icons/svg/icon-create-project.svg',
'../../assets/icons/svg/icon-design-critique.svg',
'../../assets/icons/svg/icon-dots.svg',
'../../assets/icons/svg/icon-duplicate.svg',
'../../assets/icons/svg/icon-edit.svg',
'../../assets/icons/svg/icon-email-2.svg',
'../../assets/icons/svg/icon-email-3.svg',
'../../assets/icons/svg/icon-email-for-approval.svg',
'../../assets/icons/svg/icon-email-preview.svg',
'../../assets/icons/svg/icon-email.svg',
'../../assets/icons/svg/icon-emoji.svg',
'../../assets/icons/svg/icon-folder-alt.svg',
'../../assets/icons/svg/icon-new-project.svg',
'../../assets/icons/svg/icon-play.svg',
'../../assets/icons/svg/icon-plus-square.svg',
'../../assets/icons/svg/icon-question-mark.svg',
'../../assets/icons/svg/icon-remove-from-group.svg',
'../../assets/icons/svg/icon-save-as-email-template-2.svg',
'../../assets/icons/svg/icon-save-as-email-template.svg',
'../../assets/icons/svg/icon-schedule-auto-reminder.svg',
'../../assets/icons/svg/icon-search.svg',
'../../assets/icons/svg/icon-settings.svg',
'../../assets/icons/svg/icon-share-projects.svg',
'../../assets/icons/svg/icon-share.svg',
'../../assets/icons/svg/icon-status-progress.svg',
'../../assets/icons/svg/icon-team-settings-2.svg',
'../../assets/icons/svg/icon-team-settings.svg',
'../../assets/icons/svg/icon-unarchive.svg',
'../../assets/icons/svg/icon-video-tutorials.svg',
'../../assets/icons/svg/icon-wireframe.svg'
];


export default class svg extends Component {

  render() {
    return(
      <ul className='b-icons-list'>
     {Icons.map((item) => {
       return(
         <li key={item}>
          <img src={item} className='b-svg-icon__direct'/>
         </li>
       )
      })}
      </ul>
    )
  }
}
