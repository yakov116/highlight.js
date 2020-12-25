/*
Language: Variable
Author: Yakov Kantor <16872793+yakov116@users.noreply.github.com>
Category: scripting
*/

export default function() {
  return {
    aliases: ['variable'],
    case_insensitive: true,
    keywords: {
      variable:
        'AccountNum MyName MyDateStartNoTime BetweenDates FilterCampaign HonoreeCodes JournalPagesSelection MemberSelection NoAdminOnly NoNotActive ' +
		'StudentSelection MultipleCampaignName MultipleCampaignNum MyHebrewName MySelectedCampaign MySelectedProgram MySelectedProgramPeriod AccountFNum MySelectedPeriod ' +
		'Companies MyDateStart DateStart MyDateEnd DateEnd MyCurrentPeriod JLParameter MySelectedLocations MySelectedLocation OptionalMultiCampaigns MySelectedNumCampaign ForceSunday ForceSundayInPeriod ' +
		'PeriodStart PeriodEnd FilterCharges NoSub UseFields MultipleYears LoggedInUser MySelectedClasses MySelectedEnglishClass MySelectedHebrewClass ',
      literal:
        'true false null nothing empty'
    },
    illegal: '//'
  };
}