import { Module } from '@nestjs/common';
import { TicketModule } from 'src/ticket/ticket.module';
import { UrlController } from './url.controller';
import { UrlRepository } from './url.repository';
import { UrlService } from './url.service';

@Module({
  imports: [TicketModule],
  controllers: [UrlController],
  providers: [UrlService, UrlRepository],
  exports: [UrlService],
})
export class UrlModule {}
