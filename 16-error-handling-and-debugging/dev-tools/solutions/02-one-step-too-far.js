export function averageRating(reviews) {
    if (reviews.length === 0) {
        return 0;
    }
    let sum = 0;
    // The last index is length - 1, so we stop before length.
    for (let i = 0; i < reviews.length; i++) {
        sum = sum + reviews[i].stars;
    }
    return sum / reviews.length;
}
