interface MajorCredits {
  credits: number;
  _majorCreditBrand: void;
}

interface MinorCredits {
  credits: number;
  _minorCreditBrand: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
};

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
};

const Maj1 = { credits: 20000 } as MajorCredits;
const Maj2 = { credits: 15000 } as MajorCredits;
const min1 = { credits: 250 } as MinorCredits;
const min2 = { credits: 100 } as MinorCredits;

console.log(sumMajorCredits(Maj1, Maj2));
console.log(sumMinorCredits(min1, min2));