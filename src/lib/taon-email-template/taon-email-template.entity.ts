//#region imports
import {
  Column,
  CustomColumn,
  Taon,
  TaonBaseAbstractEntity,
  TaonEntity,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailTemplateDefaultsValues } from './taon-email-template.constants';
//#endregion

@TaonEntity({
  className: 'TaonEmailTemplateEntity',
  createTable: true,
})
export class TaonEmailTemplateEntity extends TaonBaseAbstractEntity<TaonEmailTemplateEntity> {
  //#region @websql
  @Column({ type: 'varchar', unique: true })
  //#endregion
  name: string;

  //#region @websql
  @Column({ type: 'varchar' })
  //#endregion
  subject: string;

  //#region @websql
  @Column({ type: 'text' })
  //#endregion
  html: string;

  //#region @websql
  @Column({ type: 'text', nullable: true })
  //#endregion
  text: string | null;

  //#region @websql
  @Column({ type: 'simple-json', nullable: true })
  //#endregion
  defaultVariables: Record<string, any> | null;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  createdAt: Date;

  //#region @websql
  @Column({ type: 'datetime' })
  //#endregion
  updatedAt: Date;
}
