import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account!: { name: string; status: string; };
  @Input() id!: number;

  private logService!: LoggingService;
  private accountService!: AccountsService;
  constructor() {
    this.logService = inject(LoggingService);
    this.accountService = inject(AccountsService);
  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
  }
}
