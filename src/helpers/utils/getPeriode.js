import dayjs from "dayjs";


export default function getPeriode(value)  {
    function roundUp(number) {
        // Obtenir la partie entière du nombre
        const integer = Math.floor(number);
      
        // Si la partie décimale est supérieure ou égale à 0,5
        if (number - integer >= 0.5) {
          // Arrondir le nombre à l'entier supérieur
          return integer + 1;
        }
      
        // Si la partie décimale est inférieure à 0,5
        else {
          // Arrondir le nombre à l'entier inférieur
          return integer;
        }
      }
    function getSmallestUnitWithYearLimit(durationInSeconds) {
        // Convertir la durée en années
        var durationInYears = Math.floor(durationInSeconds / (365 * 24 * 60 * 60));
      
        // Si la durée est supérieure à une année
        if (durationInYears > 0) {
          // Ajouter les années à la réponse
          return `Il y'a ${durationInYears} années`;
        }
      
        // Si la durée est inférieure à une année
        else {
          // Convertir la durée en jours
          var durationInDays = Math.floor(durationInSeconds / (24 * 60 * 60));
      
          // Si la durée est supérieure à un jour
          if (durationInDays > 0) {
            // Ajouter les jours à la réponse
            return `Il y'a ${durationInDays} jours`;
          }
      
          // Si la durée est inférieure à un jour
          else {
            // Convertir la durée en heures
            var durationInHours = Math.floor(durationInSeconds / (60 * 60));
      
            // Si la durée est supérieure à une heure
            if (durationInHours > 0) {
              // Ajouter les heures à la réponse
              return `Il y'a ${durationInHours} heures`;
            }
      
            // Si la durée est inférieure à une heure
            else {
              // Convertir la durée en minutes
              var durationInMinutes = Math.floor(durationInSeconds / 60);
      
              // Si la durée est supérieure à une minute
              if (durationInMinutes > 0) {
                // Ajouter les minutes à la réponse
                return `Il y'a ${durationInMinutes} minutes`;
              }
      
              // Si la durée est inférieure à une minute
              else {
                // Convertir la durée en secondes
                var durationInSeconds = durationInSeconds % 60;
      
                // Si la durée est supérieure à 59 secondes
                 
                  // Ajouter les minutes et les secondes à la réponse
                return durationInMinutes<0?"Il y'a moins d'une minute":`${roundUp(durationInMinutes)} minutes et ${roundUp(durationInSeconds)} secondes`;
                
      
                 
              }
            }
          }
        }
      }
      
      
        var date=new Date(value)
        var now=new Date()
        var milliseconds=(now.getTime()-date.getTime()) 
        // Retourner le temps écoulé en secondes
        return  getSmallestUnitWithYearLimit(milliseconds/1000)
  }
      