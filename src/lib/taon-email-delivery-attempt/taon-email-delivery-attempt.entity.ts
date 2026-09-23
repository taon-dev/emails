//#region imports
import {
  CustomColumn,
  Column,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailDeliveryAttemptDefaultsValues } from './taon-email-delivery-attempt.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailDeliveryAttemptEntity',
  createTable: true,
})
export class TaonEmailDeliveryAttemptEntity extends TaonBaseAbstractEntity<TaonEmailDeliveryAttemptEntity> {
  //#region @websql
  @Column({ type: 'integer' })
  //#endregion
  messageId: number;

  //#region @websql
  @Column({ type: 'integer', default: 1 })
  //#endregion
  attemptNumber: number;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  provider: string;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  status: string;

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  providerMessageId: string | null;

  //#region @websql
  @Column({ type: 'text', nullable: true })
  //#endregion
  error: string | null;

  //#region @websql
  @Column({ type: 'simple-json', nullable: true })
  //#endregion
  providerResponse: Record<string, any> | null;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;
}
