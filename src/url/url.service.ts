import { Injectable } from '@nestjs/common';
import * as baseX from 'base-x';
import { ShortenUrlDto } from './dto/shorten-url.dto';
import { UrlRepository } from './url.repository';

const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const bs62 = baseX(BASE62);

@Injectable()
export class UrlService {
  constructor(private urlRepository: UrlRepository) {}

  public shortenUrl(id: string, shortenUrlDto: ShortenUrlDto) {
    const { longUrl } = shortenUrlDto;

    const buffer = Buffer.from(id);
    const shortUrl = bs62.encode(buffer);

    this.urlRepository.save({
      shortUrl,
      longUrl,
    });

    return {
      shortUrl,
      longUrl,
    };
  }

  public getLongUrl(shortUrl: string) {
    try {
      const url = this.urlRepository.getOne(shortUrl);

      if (url === undefined) {
        throw new Error('Url not found');
      }

      return url;
    } catch (err) {
      throw err;
    }
  }
}
