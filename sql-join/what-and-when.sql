select "releaseYear", "name"
from "filmGenre"
join "films" using ("filmId")
join "genres" using ("genreId")
where "title" = 'Boogie Amelie';
