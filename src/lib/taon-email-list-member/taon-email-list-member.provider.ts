//#region imports
import { Taon, TaonBaseProvider, TaonProvider } from 'taon/src';
import { _ } from 'tnp-core/src';
//#endregion

@TaonProvider({
  className: 'TaonEmailListMemberProvider',
})
export class TaonEmailListMemberProvider extends TaonBaseProvider {
  enabledTaonEmailListMemberOption: boolean = true;
}