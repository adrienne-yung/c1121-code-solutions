select count(*) as "cities in country", "C"."name"
from "countries" as "C"
join "cities" as "c" using ("countryId")
group by "C"."name";
