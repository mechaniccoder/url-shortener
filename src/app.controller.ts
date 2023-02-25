import { Controller, Get, HttpCode, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UrlService } from './url/url.service';

@Controller()
export class AppController {
  constructor(private urlService: UrlService) {}

  @HttpCode(302)
  @Get(':shortUrl')
  redirectToLongUrl(
    @Param('shortUrl') shortUrl: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const longUrl = this.urlService.getLongUrl(shortUrl);

    res.setHeader('Location', longUrl.longUrl);
  }
}
