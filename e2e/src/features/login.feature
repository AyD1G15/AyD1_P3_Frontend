Feature: ir a la pagina de login
  ingresar contraseña

  Scenario: ingresar contraseña
    Given Ingresar contraseña
    When Ingreso una contraseña valida
    Then no deberia mostrar error
    