//#region imports
import {
  CustomColumn,
  Column,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailListDefaultsValues } from './taon-email-list.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailListEntity',
  createTable: true,
})
export class TaonEmailListEntity extends TaonBaseAbstractEntity<TaonEmailListEntity> {
  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  name: string;

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  description: string | null;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;
}
