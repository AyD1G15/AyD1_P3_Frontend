Feature: ir a la pagina de transacciones
  ver mensaje

  Scenario: mensaje de error, rol administrador
    Given Ingreso a la pagina de transacciones
    When entro sin ser administrador
    Then deberia mostrar error
    