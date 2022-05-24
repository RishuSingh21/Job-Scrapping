# Job-Scrapping
An application which can consult multiple job search websites simultaneously to reduce fragmented job search environment

It involves basic information retrieval, ranking and listing of relevant search results based on user query.

Process:
1. User enters query on main web page, specifies websites to search from
2. Based on websites selected, backend activates web scrapers for each website, collecting results from each
3. Our system displays one job only once even if a same job listed across multiple websites. Hence the search result does not have any redundant data
4. Rank job title of each result by sentence similarity to query job title, location and then sort accordingly
5. Results displayed in tabular format, with link to original job posting as well as indicating which source provided the job application






