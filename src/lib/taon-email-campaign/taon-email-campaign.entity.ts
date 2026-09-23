//#region imports
import {
  CustomColumn,
  Column,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailCampaignDefaultsValues } from './taon-email-campaign.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailCampaignEntity',
  createTable: true,
})
export class TaonEmailCampaignEntity extends TaonBaseAbstractEntity<TaonEmailCampaignEntity> {
  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  name: string;

  //#region @websql
  @Column({ type: 'integer', nullable: true })
  //#endregion
  templateId: number | null;

  //#region @websql
  @Column({ type: 'integer', nullable: true })
  //#endregion
  listId: number | null;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  subject: string;

  //#region @websql
  @Column({ type: 'varchar', default: 'draft' })
  //#endregion
  status: string;

  //#region @websql
  @Column({ type: 'datetime', nullable: true })
  //#endregion
  scheduledAt: Date | null;

  //#region @websql
  @Column({ type: 'datetime', nullable: true })
  //#endregion
  startedAt: Date | null;

  //#region @websql
  @Column({ type: 'datetime', nullable: true })
  //#endregion
  completedAt: Date | null;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;
}
