# URL shortener system

Create URL shortener system thinking of below

- Functional Programming
- Clean Architecture

# Problem and Design scope

- Shorten URL like below
  https://www.example.com?query=chatgpt&version=1.0.0&filter=latest
  -> https://shorten.com/z7abcde

- 100 millions URLs are generated per day
- Assume ratio of read operation to write operation is 10:1
- Service will managed for 10 years
- Assume average URL length is 100

# Back of the envelope estimation

- Write operation per second: 100 \* 10^6 / 24 hours / 3600 seconds = 1,160 per seocond
- Read operation per second: 1160 \* 10 = 11,600 per second
- URL records: 100 million _ 365 days _ 10 years = 10^8 _ 365 _ 10^1 = 365 \* 10^9 = 365 billion records
- Storage: 365 billion \* 100 bytes = 36.5 terabytes

# API endpoints

- GET /:shorten_url -> redirect to long URL
- GET /v1/urls/:shorten_url -> return long URL
- POST /v1/shorten -> shorten URL
