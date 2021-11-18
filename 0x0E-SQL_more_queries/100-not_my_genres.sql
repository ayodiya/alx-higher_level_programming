-- The tv_shows table contains only one record where title = Dexter (but the id can be different)
-- Each record should display: tv_genres.name
-- Results must be sorted in ascending order by the genre name
-- You can use a maximum of two SELECT statement
-- The database name will be passed as an argument of the mysql command
SELECT g.name
FROM tv_genres g
WHERE g.name NOT IN (
      SELECT g.name
      FROM tv_genres g
      INNER JOIN tv_show_genres m ON g.id = m.genre_id
      INNER JOIN tv_shows s ON m.show_id = s.id
      WHERE s.title = 'Dexter'
 )
 ORDER BY g.name ASC;
