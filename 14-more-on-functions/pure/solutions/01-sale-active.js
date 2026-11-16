export function isSaleActive(sale, now) {
    return now >= sale.startsAt && now <= sale.endsAt;
}
