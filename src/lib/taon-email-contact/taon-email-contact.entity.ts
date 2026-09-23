//#region imports
import {
  CustomColumn,
  Column,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailContactDefaultsValues } from './taon-email-contact.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailContactEntity',
  createTable: true,
})
export class TaonEmailContactEntity extends TaonBaseAbstractEntity<TaonEmailContactEntity> {
  //#region @websql
  @Column({ type: 'varchar', unique: true })
  //#endregion
  email: string;

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  name: string | null;

  //#region @websql
  @Column({ type: 'boolean', default: true })
  //#endregion
  subscribed: boolean;

  //#region @websql
  @Column({ type: 'datetime', nullable: true })
  //#endregion
  subscribedAt: Date | null;

  //#region @websql
  @Column({ type: 'datetime', nullable: true })
  //#endregion
  unsubscribedAt: Date | null;

  //#region @websql
  @Column({ type: 'simple-json', nullable: true })
  //#endregion
  metadata: Record<string, any> | null;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  updatedAt: Date;
}
