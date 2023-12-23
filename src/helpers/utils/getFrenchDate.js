


function getFrenchDate(stringDate){
    const options= {
      year:'numeric',month:'long',day:'numeric'};
      const date=new Date (stringDate);
      return date.toLocaleDateString('fr-FR',options)
    } 
export default getFrenchDate