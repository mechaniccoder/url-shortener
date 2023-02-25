import { Body, Controller, Post } from '@nestjs/common';
import { TicketService } from 'src/ticket/ticket.service';
import { ShortenUrlDto } from './dto/shorten-url.dto';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
  constructor(
    private urlService: UrlService,
    private ticketService: TicketService,
  ) {}

  @Post('/v1/shorten')
  shortenUrl(@Body() shortenUrlDto: ShortenUrlDto) {
    const id = this.ticketService.generate();
    return this.urlService.shortenUrl(id, shortenUrlDto);
  }
}
