//#region imports
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//#endregion

@Component({
  selector: 'app-taon-emails-backoffice',
  templateUrl: './taon-emails-backoffice.component.html',
  styleUrls: ['./taon-emails-backoffice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, RouterOutlet],
})
export class TaonEmailsBackofficeComponent {}