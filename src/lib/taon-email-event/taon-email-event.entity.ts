//#region imports
import {
  CustomColumn,
  Column,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailEventDefaultsValues } from './taon-email-event.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailEventEntity',
  createTable: true,
})
export class TaonEmailEventEntity extends TaonBaseAbstractEntity<TaonEmailEventEntity> {
  //#region @websql
  @Column({ type: 'integer', nullable: true })
  //#endregion
  messageId: number | null;

  //#region @websql
  @Column({ type: 'integer', nullable: true })
  //#endregion
  campaignId: number | null;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  type: string;
  // delivered | opened | clicked | bounced | complained | failed

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  providerEventId: string | null;

  //#region @websql
  @Column({ type: 'simple-json', nullable: true })
  //#endregion
  data: Record<string, any> | null;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;
}
