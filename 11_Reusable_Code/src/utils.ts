// Converting Date Strings to Dates
export const dateStringToDate = (datString: string): Date => {
    // 28/10/2018
    const dateParts = datString.split('/') /* ['28', '10', '2018'] */
        .map((value: string): number => {
            return parseInt(value)
        });
    // January is supposed to be zero
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}