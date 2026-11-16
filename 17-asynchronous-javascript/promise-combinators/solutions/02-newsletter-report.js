export function sendNewsletters(recipients, send) {
    return Promise.allSettled(recipients.map(send)).then((results) => {
        const report = { sent: [], failed: [] };
        results.forEach((result, i) => {
            if (result.status === 'fulfilled') {
                report.sent.push(recipients[i]);
            } else {
                const reason = result.reason.message;
                report.failed.push({ email: recipients[i], reason });
            }
        });
        return report;
    });
}
