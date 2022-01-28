select "firstName", "lastName", sum("amount") as "totalAmount"
from "payments" as "p"
join "customers" as "c" using ("customerId")
group by "customerId"
order by "totalAmount" DESC;
