class HatchDevClass {
   private pupils: string[] = []

   constructor(student: string[]) {
      this.pupils = student
   }

   getStudentNames() {
      return this.pupils
   }

   getTotalNumberOfStudents() {
      return this.pupils.length
   }
}

const excelSheet = ['Ade', 'Lola', 'Bola', 'Tola']
const HC = new HatchDevClass(excelSheet)

console.log(HC)
console.log('Students:', HC.getStudentNames())
console.log('Total:', HC.getTotalNumberOfStudents())

const chl = ['arsenal', 'bayern', 'real-madrid', 'man-city']
const disClubs = ['arsenal', 'man-city']

const disPeople: string[] = []

for (let i = 0; i < chl.length; i++) {
   const club = chl[i]
   if (club == 'arsenal' || club == 'man-city') {
      disPeople.push(club)
   }
}

console.log("disqualified:", disPeople)

let imperRemaining: string[] = []

for (let club of chl) {
   if (!disClubs.includes(club)) {
      imperRemaining.push(club)
   }
}

console.log(imperRemaining)

// Declarative paradigm
const remaining = chl.filter((club) => !disClubs.includes(club))
console.log(remaining)
