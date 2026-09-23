//#region imports
import { Taon, TaonBaseProvider, TaonProvider } from 'taon/src';
import { _ } from 'tnp-core/src';
//#endregion

@TaonProvider({
  className: 'TaonEmailTemplateProvider',
})
export class TaonEmailTemplateProvider extends TaonBaseProvider {
  enabledTaonEmailTemplateOption: boolean = true;
}