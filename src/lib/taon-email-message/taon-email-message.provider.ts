//#region imports
import { Taon, TaonBaseProvider, TaonProvider } from 'taon/src';
import { _ } from 'tnp-core/src';
//#endregion

@TaonProvider({
  className: 'TaonEmailMessageProvider',
})
export class TaonEmailMessageProvider extends TaonBaseProvider {
  enabledTaonEmailMessageOption: boolean = true;
}