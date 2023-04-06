function calculate() {
  // Obtenemos los valores de los inputs
  const initial = parseFloat(document.getElementById("initial").value);
  const interest = parseFloat(document.getElementById("interest").value);
  const period = parseFloat(document.getElementById("period").value);
  const years = parseFloat(document.getElementById("years").value);

  // Calculamos la ganancia total
  const rate = interest / 100;
  const periods = period === 7 ? 1 : period;
  const compound = 1 + rate / periods;
  const n = periods * years;
  const total = initial * Math.pow(compound, n);
  
  // Calculamos la ganancia de intereses
  const interestTotal = total - initial;

  // Calculamos la ganancia de intereses mensual
  const interestMonthly = (total - initial) / (years * 12);

  // Calculamos el interés anual si el periodo de capitalización es mensual
  let annualRate = "";
  if (period === 5) {
    const monthlyCompound = Math.pow(compound, 1 / periods);
    const monthlyRate = (monthlyCompound - 1) * 100;
  }

  // Formateamos los resultados con separador de miles y coma para los centavos
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Mostramos los resultados formateados en el HTML
  document.getElementById("result").innerHTML = `
    <p>Ganancia Total: ${formatter.format(total)}</p>
    <p>Intereses Generados: ${formatter.format(interestTotal)}</p>
    <p>Intereses Mensual: ${formatter.format(interestMonthly)}</p>
  `;
}
