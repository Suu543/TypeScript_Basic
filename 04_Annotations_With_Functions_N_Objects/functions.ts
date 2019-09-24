// Type Annotation
const add = (a: number, b: number): number => {
    return a + b;
};

// Type Inference
const multiply = (a: number, b: number) => {
    return a * b
}

// Common Mistake - should add return type and keyword
const subtract = (a: number, b: number) => {
    a - b
}

function divide(a: number, b: number): number {
    return a / b
}

// Annotations for Anonymous Function
const 곱하기 = function (a: number, b: number): number {
    return a * b
}

// Void and Never
const logger = (message: string): void => {
    console.log(message);
    // not return anything
    // return null; or return undefined;
}

const throwError = (message: string): never => {
    // never going to completely execute this function
    throw new Error(message)
}

// But there is conditional statement used to decide throw Error vs return
// We just specify type of return
const mixture = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }

    return message;
}

// Destructuring with Annotations
const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather)
}

// ES 2015
const loggingWeather = ({ date, weather }: { date: Date, weather: string }) => {
    console.log(date);
    console.log(weather)
}

