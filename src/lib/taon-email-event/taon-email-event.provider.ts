//#region imports
import { Taon, TaonBaseProvider, TaonProvider } from 'taon/src';
import { _ } from 'tnp-core/src';
//#endregion

@TaonProvider({
  className: 'TaonEmailEventProvider',
})
export class TaonEmailEventProvider extends TaonBaseProvider {
  enabledTaonEmailEventOption: boolean = true;
}