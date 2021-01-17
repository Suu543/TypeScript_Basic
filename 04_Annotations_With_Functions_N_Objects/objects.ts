const profile = {
    name: 'su',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age
    }
};

// we can ignore this error
const { name, age }: { name: string; age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;
const { setAge }: { setAge: (age: number) => void } = profile;
 