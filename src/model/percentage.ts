export class Percentage {
    percentage: string;
    amount: string
    constructor(percentage: string, amount: string) {
        this.percentage = percentage;
        this.amount = amount;
    }
    static CreateNew(): Percentage {
        return new Percentage('10', '100000');
    }
}

export class ToPercentageCalc {
    amountOf: string;
    inWhat: string;
    constructor(amountOf: string, inWhat: string) {
        this.amountOf = amountOf;
        this.inWhat = inWhat;
    }
    static CreateNew(): ToPercentageCalc {
        return new ToPercentageCalc('100', '1000');
    }
}

export class IncDecPercentage {
    from: string;
    to: string;
    constructor(from: string, to: string) {
        this.from = from;
        this.to = to;
    }
    static CreateNew(): IncDecPercentage {
        return new IncDecPercentage('100', '110');
    }
}