//#region imports
import { Taon, TaonBaseProvider, TaonProvider } from 'taon/src';
import { _ } from 'tnp-core/src';
//#endregion

@TaonProvider({
  className: 'TaonEmailListProvider',
})
export class TaonEmailListProvider extends TaonBaseProvider {
  enabledTaonEmailListOption: boolean = true;
}