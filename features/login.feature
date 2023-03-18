Feature: La busquedad en ebay

  Scenario Outline: Buscar la cantidad de resultados de pilas encontradas en ebay

    Given Accedo a la pagina de ebay
    When Ingreso en el campo buscar producto la palabra <search> y hago click en el boton buscar
    Then Muesto por consola la cantidad de <search> encontradas


    Examples:
      | search   |
      | pilas    |