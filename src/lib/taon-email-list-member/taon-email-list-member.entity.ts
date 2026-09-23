//#region imports
import {
  CustomColumn,
  Column,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailListMemberDefaultsValues } from './taon-email-list-member.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailListMemberEntity',
  createTable: true,
})
export class TaonEmailListMemberEntity extends TaonBaseAbstractEntity<TaonEmailListMemberEntity> {
  //#region @websql
  @Column({ type: 'integer' })
  //#endregion
  listId: number;

  //#region @websql
  @Column({ type: 'integer' })
  //#endregion
  contactId: number;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;
}
