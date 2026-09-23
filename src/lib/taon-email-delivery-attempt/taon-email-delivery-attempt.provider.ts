//#region imports
import { Taon, TaonBaseProvider, TaonProvider } from 'taon/src';
import { _ } from 'tnp-core/src';
//#endregion

@TaonProvider({
  className: 'TaonEmailDeliveryAttemptProvider',
})
export class TaonEmailDeliveryAttemptProvider extends TaonBaseProvider {
  enabledTaonEmailDeliveryAttemptOption: boolean = true;
}