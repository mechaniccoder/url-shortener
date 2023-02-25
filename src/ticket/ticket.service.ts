import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketService {
  private ticket = 0;

  public generate(): string {
    return String(this.ticket++);
  }
}
