//#region imports
import {
  Column,
  CustomColumn,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailMessageDefaultsValues } from './taon-email-message.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailMessageEntity',
  createTable: true,
})
export class TaonEmailMessageEntity extends TaonBaseAbstractEntity<TaonEmailMessageEntity> {
  //#region @websql
  @Column({ type: 'integer', nullable: true })
  //#endregion
  templateId: number | null;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  fromEmail: string;

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  fromName: string | null;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  toEmail: string;

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  replyToEmail: string | null;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  subject: string;

  //#region @websql
  @Column({ type: 'text', nullable: true })
  //#endregion
  html: string | null;

  //#region @websql
  @Column({ type: 'text', nullable: true })
  //#endregion
  text: string | null;

  //#region @websql
  @Column({ type: 'simple-json', nullable: true })
  //#endregion
  variables: Record<string, any> | null;

  //#region @websql
  @Column({ type: 'varchar', default: 'pending' })
  //#endregion
  status: string;

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  provider: string | null;

  //#region @websql
  @Column({ type: 'varchar', nullable: true })
  //#endregion
  providerMessageId: string | null;

  //#region @websql
  @Column({ type: 'datetime', nullable: true })
  //#endregion
  sentAt: Date | null;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;
}
