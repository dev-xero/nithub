// Defines a contract for classes that implement contact
interface IContact {
    displayContact(): void;
}

interface Transformer {
    predictNextToken(): string;
}

interface StateTransformer extends Transformer {
    get getState(): string;
}

class PhoneContact implements IContact {
    displayContact(): void {
        console.log('Implemented.');
    }
}

// This class implements the transformer interface
class GPT implements StateTransformer {
    predictNextToken(): string {
        return 'Next token';
    }

    get getState(): string {
        return 'State Transformer';
    }
}

const somePhone = new PhoneContact();
const chatGPT = new GPT();

somePhone.displayContact();
console.log(chatGPT.predictNextToken());
console.log(chatGPT.getState);
