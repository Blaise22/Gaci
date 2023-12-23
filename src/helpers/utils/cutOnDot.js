function cutOnDot(string) {
    // Trouve l'indice du premier point
   // Trouve l'indice du point
  let pointIndex = string.indexOf(".");

  // Si le point n'est pas trouvé, retourne le string original
  if (pointIndex === -1) {
    return string;
  }

  // Retourne la partie du string avant le point
  return string.substr(0, pointIndex);
  }
  export default cutOnDot