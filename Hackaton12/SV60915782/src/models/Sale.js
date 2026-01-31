// Base de datos en memoria
let listSales = [];

/**
 * Modelo Sale
 * Define la estructura y validaciones de una venta/tarea
 */
class Sale {
  constructor(name, description, date, esCompletado) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.esCompletado = esCompletado;
  }

  /**
   * Valida que todos los campos requeridos estén presentes y sean del tipo correcto
   */
  static validate(data) {
    const { name, description, date, esCompletado } = data;

    // Validar que todos los campos existan
    if (!name || !description || !date) {
      return { valid: false, message: 'faltan campos' };
    }

    // IMPORTANTE: Validar que esCompletado sea un booleano
    // No usar !esCompletado porque false es un valor válido
    if (typeof esCompletado !== 'boolean') {
      return { valid: false, message: 'faltan campos' };
    }

    return { valid: true };
  }

  /**
   * Crea una nueva venta/tarea
   */
  static create(data) {
    const newSale = new Sale(
      data.name,
      data.description,
      data.date,
      data.esCompletado
    );
    
    listSales.push(newSale);
    return newSale;
  }

  /**
   * Obtiene todas las ventas
   */
  static getAll() {
    return listSales;
  }

  /**
   * Filtra ventas por estado
   */
  static filterByStatus(isCompleted) {
    return listSales.filter(sale => sale.esCompletado === isCompleted);
  }
}

module.exports = Sale;
