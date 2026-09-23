//#region imports
import { Taon, TaonBaseProvider, TaonProvider } from 'taon/src';
import { _ } from 'tnp-core/src';
//#endregion

@TaonProvider({
  className: 'TaonEmailCampaignRecipientProvider',
})
export class TaonEmailCampaignRecipientProvider extends TaonBaseProvider {
  enabledTaonEmailCampaignRecipientOption: boolean = true;
}