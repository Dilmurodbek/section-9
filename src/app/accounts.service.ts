import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private logService: LoggingService) { }
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();
  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logService.logStatusChange(status);
  }
  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.logService.logStatusChange(status);
    this.statusUpdated.emit(status);
  }
}
