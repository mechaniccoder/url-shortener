import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlRepository {
  private urls: any[] = [];

  public save(record: any) {
    this.urls.push(record);
  }
}
