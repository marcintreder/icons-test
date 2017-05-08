import React, { Component } from 'react';

import IconAddMember from '../../assets/icons/PNG/icon-add-member.png';
import IconAddNote from '../../assets/icons/PNG/icon-add-note.png';
import IconAddSth from '../../assets/icons/PNG/icon-add-sth-sb.png';
import IconApproval2 from '../../assets/icons/PNG/icon-approval-2.png';
import IconApproval from '../../assets/icons/PNG/icon-approval.png';
import IconArchive2 from '../../assets/icons/PNG/icon-archive-2.png';
import IconArchive from '../../assets/icons/PNG/icon-archive.png';
import IconArrowDown from '../../assets/icons/PNG/icon-arrow-down.png';
import IconAutomation from '../../assets/icons/PNG/icon-automation.png';
import IconBackToVideo from '../../assets/icons/PNG/icon-back-to-video-tutorials.png';
import IconCalendar from '../../assets/icons/PNG/icon-calendar.png';
import IconChangeProjectGroup2 from '../../assets/icons/PNG/icon-change-project-group-2.png';
import IconChangeProjectGroup3 from '../../assets/icons/PNG/icon-change-project-group-3.png';
import IconChangeProjectGroup from '../../assets/icons/PNG/icon-change-project-group.png';
import IconComments from '../../assets/icons/PNG/icon-comments.png';
import IconCreateProject from '../../assets/icons/PNG/icon-create-project.png';
import IconDesignCritique from '../../assets/icons/PNG/icon-design-critique.png';
import IconDots from '../../assets/icons/PNG/icon-dots.png';
import IconDuplicate from '../../assets/icons/PNG/icon-duplicate.png';
import IconEdit from '../../assets/icons/PNG/icon-edit.png';
import IconEmail2 from '../../assets/icons/PNG/icon-email-2.png';
import IconEmail3 from '../../assets/icons/PNG/icon-email-3.png';
import IconEmailApproval from '../../assets/icons/PNG/icon-email-for-approval.png';
import IconEmailPreview from '../../assets/icons/PNG/icon-email-preview.png';
import IconEmail from '../../assets/icons/PNG/icon-email.png';
import IconEmoji from '../../assets/icons/PNG/icon-emoji.png';
import IconFolderAlt from '../../assets/icons/PNG/icon-folder-alt.png';
import IconNewProject from '../../assets/icons/PNG/icon-new-project.png';
import IconPlay from '../../assets/icons/PNG/icon-play.png';
import IconPlusSquare from '../../assets/icons/PNG/icon-plus-square.png';
import IconQuestionMark from '../../assets/icons/PNG/icon-question-mark.png';
import IconRemoveFromGroup from '../../assets/icons/PNG/icon-remove-from-group.png';
import IconSaveAsEmailTemplate2 from '../../assets/icons/PNG/icon-save-as-email-template-2.png';
import IconSaveAsEmailTemplate from '../../assets/icons/PNG/icon-save-as-email-template.png';
import IconScheduleAutoReminder from '../../assets/icons/PNG/icon-schedule-auto-reminder.png';
import IconSearch from '../../assets/icons/PNG/icon-search.png';
import IconSettings from '../../assets/icons/PNG/icon-settings.png';
import IconShareProjects from '../../assets/icons/PNG/icon-share-projects.png';
import IconShare from '../../assets/icons/PNG/icon-share.png';
import IconStatusProgress from '../../assets/icons/PNG/icon-status-progress.png';
import IconTeamSettings2 from '../../assets/icons/PNG/icon-team-settings-2.png';
import IconTeamSettings from '../../assets/icons/PNG/icon-team-settings.png';
import IconUnarchive from '../../assets/icons/PNG/icon-unarchive.png';
import IconVideoTutorials from '../../assets/icons/PNG/icon-video-tutorials.png';
import IconWireframe from '../../assets/icons/PNG/icon-wireframe.png';

const Icons = ['../../assets/icons/PNG/icon-add-member.png',
'../../assets/icons/PNG/icon-add-note.png',
'../../assets/icons/PNG/icon-add-sth-sb.png',
'../../assets/icons/PNG/icon-approval-2.png',
'../../assets/icons/PNG/icon-approval.png',
'../../assets/icons/PNG/icon-archive-2.png',
'../../assets/icons/PNG/icon-archive.png',
'../../assets/icons/PNG/icon-arrow-down.png',
'../../assets/icons/PNG/icon-automation.png',
'../../assets/icons/PNG/icon-back-to-video-tutorials.png',
'../../assets/icons/PNG/icon-calendar.png',
'../../assets/icons/PNG/icon-change-project-group-2.png',
'../../assets/icons/PNG/icon-change-project-group-3.png',
'../../assets/icons/PNG/icon-change-project-group.png',
'../../assets/icons/PNG/icon-comments.png',
'../../assets/icons/PNG/icon-create-project.png',
'../../assets/icons/PNG/icon-design-critique.png',
'../../assets/icons/PNG/icon-dots.png',
'../../assets/icons/PNG/icon-duplicate.png',
'../../assets/icons/PNG/icon-edit.png',
'../../assets/icons/PNG/icon-email-2.png',
'../../assets/icons/PNG/icon-email-3.png',
'../../assets/icons/PNG/icon-email-for-approval.png',
'../../assets/icons/PNG/icon-email-preview.png',
'../../assets/icons/PNG/icon-email.png',
'../../assets/icons/PNG/icon-emoji.png',
'../../assets/icons/PNG/icon-folder-alt.png',
'../../assets/icons/PNG/icon-new-project.png',
'../../assets/icons/PNG/icon-play.png',
'../../assets/icons/PNG/icon-plus-square.png',
'../../assets/icons/PNG/icon-question-mark.png',
'../../assets/icons/PNG/icon-remove-from-group.png',
'../../assets/icons/PNG/icon-save-as-email-template-2.png',
'../../assets/icons/PNG/icon-save-as-email-template.png',
'../../assets/icons/PNG/icon-schedule-auto-reminder.png',
'../../assets/icons/PNG/icon-search.png',
'../../assets/icons/PNG/icon-settings.png',
'../../assets/icons/PNG/icon-share-projects.png',
'../../assets/icons/PNG/icon-share.png',
'../../assets/icons/PNG/icon-status-progress.png',
'../../assets/icons/PNG/icon-team-settings-2.png',
'../../assets/icons/PNG/icon-team-settings.png',
'../../assets/icons/PNG/icon-unarchive.png',
'../../assets/icons/PNG/icon-video-tutorials.png',
'../../assets/icons/PNG/icon-wireframe.png'
];


export default class Png extends Component {

  render() {
    return(
      <ul className='b-icons-list'>
     {Icons.map((item) => {
       return(
         <li key={item}>
          <img src={item} />
         </li>
       )
      })}
      </ul>
    )
  }
}
