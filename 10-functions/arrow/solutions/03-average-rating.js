export const averageRating = (...ratings) => {
    if (ratings.length === 0) {
        return 0;
    }

    const sum = ratings.reduce((total, rating) => total + rating, 0);
    return Math.round((sum / ratings.length) * 10) / 10;
};
