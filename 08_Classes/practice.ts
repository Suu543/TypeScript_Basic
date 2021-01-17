// Property 'protectedFunc' is protected and only accessible within class 'Test' and its subclasses.ts(2445)

class Test {
    constructor(public color: string) {
        this.color = color;
    }

    private secretFunc(): void {
        console.log("This is Secret")
    }

    protected protectedFunc(): void {
        console.log("This is protected")
    }

    public publicFunc(): void {
        // Only accessible within class 'Test' and its subclasses
        this.protectedFunc();
    }
}

class SecondTest extends Test {
    constructor(public wheels: number, color: string) {
        super(color);
        this.wheels = wheels
    }

    public logConstructor(): void {
        console.log(this.color);
        console.log(this.wheels);
    }

    public callProtectedFunc(): void {
        // This is one of Test's subclasses
        super.protectedFunc()
    }
}

let test1 = new SecondTest(11, 'aaa');
test1.logConstructor();
test1.callProtectedFunc();
test1.protectedFunc();

let test2 = new Test('aaa');
test2.publicFunc();