import { Injectable } from '@nestjs/common';

export interface Url {
  shortUrl: string;
  longUrl: string;
}

@Injectable()
export class UrlRepository {
  private urls: Url[] = [];

  public save(record: Url) {
    this.urls.push(record);
  }

  public getOne(shortUrl: string) {
    const result = this.urls.find((url) => url.shortUrl === shortUrl);

    return result;
  }
}
