select "g"."name", count(*)
from "genres" as "g"
join "filmGenre" as "fg" using ("genreId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" as "a" using ("actorId")
where "a"."firstName" = 'Lisa'
      and "a"."lastName" = 'Monroe'
group by "g"."genreId";
