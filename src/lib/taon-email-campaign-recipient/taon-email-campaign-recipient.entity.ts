//#region imports
import {
  CustomColumn,
  Column,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailCampaignRecipientDefaultsValues } from './taon-email-campaign-recipient.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailCampaignRecipientEntity',
  createTable: true,
})
export class TaonEmailCampaignRecipientEntity extends TaonBaseAbstractEntity<TaonEmailCampaignRecipientEntity> {
  //#region @websql
  @Column({ type: 'integer' })
  //#endregion
  campaignId: number;

  //#region @websql
  @Column({ type: 'integer' })
  //#endregion
  contactId: number;

  //#region @websql
  @Column({ type: 'integer', nullable: true })
  //#endregion
  messageId: number | null;

  //#region @websql
  @Column({ type: 'varchar', default: 'pending' })
  //#endregion
  status: string;

  //#region @websql
  @Column({ type: 'datetime', nullable: true })
  //#endregion
  sentAt: Date | null;
}
