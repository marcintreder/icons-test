import React, { Component } from 'react';

import IconAddMember from '../../assets/icons/SVG/icon-add-member.svg';
import IconAddNote from '../../assets/icons/SVG/icon-add-note.svg';
import IconAddSth from '../../assets/icons/SVG/icon-add-sth-sb.svg';
/*import IconApproval2 from '../../assets/icons/SVG/icon-approval-2.svg';
import IconApproval from '../../assets/icons/SVG/icon-approval.svg';
import IconArchive2 from '../../assets/icons/SVG/icon-archive-2.svg';
import IconArchive from '../../assets/icons/SVG/icon-archive.svg';
import IconArrowDown from '../../assets/icons/SVG/icon-arrow-down.svg';
import IconAutomation from '../../assets/icons/SVG/icon-automation.svg';
import IconBackToVideo from '../../assets/icons/SVG/icon-back-to-video-tutorials.svg';
import IconCalendar from '../../assets/icons/SVG/icon-calendar.svg';
import IconChangeProjectGroup2 from '../../assets/icons/SVG/icon-change-project-group-2.svg';
import IconChangeProjectGroup3 from '../../assets/icons/SVG/icon-change-project-group-3.svg';
import IconChangeProjectGroup from '../../assets/icons/SVG/icon-change-project-group.svg';
import IconComments from '../../assets/icons/SVG/icon-comments.svg';
import IconCreateProject from '../../assets/icons/SVG/icon-create-project.svg';
import IconDesignCritique from '../../assets/icons/SVG/icon-design-critique.svg';
import IconDots from '../../assets/icons/SVG/icon-dots.svg';
import IconDuplicate from '../../assets/icons/SVG/icon-duplicate.svg';
import IconEdit from '../../assets/icons/SVG/icon-edit.svg';
import IconEmail2 from '../../assets/icons/SVG/icon-email-2.svg';
import IconEmail3 from '../../assets/icons/SVG/icon-email-3.svg';
import IconEmailApproval from '../../assets/icons/SVG/icon-email-for-approval.svg';
import IconEmailPreview from '../../assets/icons/SVG/icon-email-preview.svg';
import IconEmail from '../../assets/icons/SVG/icon-email.svg';
import IconEmoji from '../../assets/icons/SVG/icon-emoji.svg';
import IconFolderAlt from '../../assets/icons/SVG/icon-folder-alt.svg';
import IconNewProject from '../../assets/icons/SVG/icon-new-project.svg';
import IconPlay from '../../assets/icons/SVG/icon-play.svg';
import IconPlusSquare from '../../assets/icons/SVG/icon-plus-square.svg';
import IconQuestionMark from '../../assets/icons/SVG/icon-question-mark.svg';
import IconRemoveFromGroup from '../../assets/icons/SVG/icon-remove-from-group.svg';
import IconSaveAsEmailTemplate2 from '../../assets/icons/SVG/icon-save-as-email-template-2.svg';
import IconSaveAsEmailTemplate from '../../assets/icons/SVG/icon-save-as-email-template.svg';
import IconScheduleAutoReminder from '../../assets/icons/SVG/icon-schedule-auto-reminder.svg';
import IconSearch from '../../assets/icons/SVG/icon-search.svg';
import IconSettings from '../../assets/icons/SVG/icon-settings.svg';
import IconShareProjects from '../../assets/icons/SVG/icon-share-projects.svg';
import IconShare from '../../assets/icons/SVG/icon-share.svg';
import IconStatusProgress from '../../assets/icons/SVG/icon-status-progress.svg';
import IconTeamSettings2 from '../../assets/icons/SVG/icon-team-settings-2.svg';
import IconTeamSettings from '../../assets/icons/SVG/icon-team-settings.svg';
import IconUnarchive from '../../assets/icons/SVG/icon-unarchive.svg';
import IconVideoTutorials from '../../assets/icons/SVG/icon-video-tutorials.svg';
import IconWireframe from '../../assets/icons/SVG/icon-wireframe.svg';*/

const Icons = [IconAddMember, IconAddNote, IconAddSth];

/*, IconApproval2, IconApproval, IconArchive2, IconArchive, IconArrowDown, IconAutomation,
  IconBackToVideo, IconCalendar, IconChangeProjectGroup2, IconChangeProjectGroup3, IconChangeProjectGroup, IconComments, IconCreateProject,
  IconDesignCritique, IconDots, IconDuplicate, IconEdit, IconEmail2, IconEmail3, IconEmailApproval, IconEmailPreview, IconEmail, IconEmoji, IconFolderAlt,
  IconNewProject, IconPlay, IconPlusSquare, IconQuestionMark, IconRemoveFromGroup, IconSaveAsEmailTemplate2, IconSaveAsEmailTemplate, IconScheduleAutoReminder,
  IconSearch, IconSettings, IconShareProjects, IconShare, IconStatusProgress, IconTeamSettings2, IconTeamSettings, IconUnarchive, IconVideoTutorials, IconWireframe];*/


export default class svgBase extends Component {

  render() {
    return(
      <ul className='b-icons-list'>
     {Icons.map((item) => {
       return(
         <li key={item} className='b-svg'>
          <img src={item} />
         </li>
       )
      })}
      </ul>
    )
  }
}
