export function formatDate() {
    // Input date string
    const dateString = "2023-11-01T11:00:00.000Z";

    // Create a Date object from the input string
    const date = new Date(dateString);

    // Function to pad single digits with leading zeros
    const pad = (num) => (num < 10 ? '0' : '') + num;

    // Extract date components
    const day = pad(date.getUTCDate());
    const month = pad(date.getUTCMonth() + 1); // Months are zero-based
    const year = date.getUTCFullYear();
    const hours = pad(date.getUTCHours());
    const minutes = pad(date.getUTCMinutes());

    // Format the date
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

    return formattedDate
}