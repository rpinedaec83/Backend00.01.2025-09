/* 1. Clientes que viven en USA */
SELECT * FROM Customers
WHERE Country = 'USA';

/* 2. Proveedores que viven en la ciudad de Berlin */
SELECT * FROM Suppliers
WHERE City = 'Berlin';

/* 3. Empleados con código 3,5 y 8 */
SELECT * FROM Employees
WHERE EmployeeID IN (3,5,8);

/* 4. Productos con stock > 0 y proveedor 1,3,5 */
SELECT * FROM Products
WHERE UnitsInStock > 0
AND SupplierID IN (1,3,5);

/* 5. Productos con precio entre 20 y 90 */
SELECT * FROM Products
WHERE UnitPrice BETWEEN 20 AND 90;

/* 6. Órdenes entre 01/01/1997 y 15/07/1997 */
SELECT * FROM Orders
WHERE OrderDate BETWEEN '1997-01-01' AND '1997-07-15';

/* 7. Órdenes de 1997 de empleados 1,3,4,8 */
SELECT * FROM Orders
WHERE YEAR(OrderDate) = 1997
AND EmployeeID IN (1,3,4,8);

/* 8. Órdenes del año 1996 */
SELECT * FROM Orders
WHERE YEAR(OrderDate) = 1996;

/* 9. Órdenes de abril de 1997 */
SELECT * FROM Orders
WHERE YEAR(OrderDate) = 1997
AND MONTH(OrderDate) = 4;

/* 10. Órdenes del día 1 de cada mes en 1998 */
SELECT * FROM Orders
WHERE YEAR(OrderDate) = 1998
AND DAY(OrderDate) = 1;

/* 11. Clientes sin fax */
SELECT * FROM Customers
WHERE Fax IS NULL;

/* 12. Clientes con fax */
SELECT * FROM Customers
WHERE Fax IS NOT NULL;

/* 13. Producto, precio, stock y categoría */
SELECT p.ProductName, p.UnitPrice, p.UnitsInStock, c.CategoryName
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID;

/* 14. Producto, precio y proveedor */
SELECT p.ProductName, p.UnitPrice, s.CompanyName
FROM Products p
JOIN Suppliers s ON p.SupplierID = s.SupplierID;

/* 15. Orden, producto, precio, cantidad y total */
SELECT od.OrderID, od.ProductID, od.UnitPrice,
        od.Quantity,
        od.UnitPrice * od.Quantity AS Total
FROM Order_Details od;

/* 16. Orden, fecha, producto y empleado */
SELECT o.OrderID, o.OrderDate, od.ProductID,
        CONCAT(e.FirstName,' ',e.LastName) AS Empleado
FROM Orders o
JOIN Order_Details od ON o.OrderID = od.OrderID
JOIN Employees e ON o.EmployeeID = e.EmployeeID;

/* 17. 10 productos con menor stock */
SELECT * FROM Products
ORDER BY UnitsInStock ASC
LIMIT 10;

/* 18. 10 productos con mayor stock */
SELECT * FROM Products
ORDER BY UnitsInStock DESC
LIMIT 10;

/* 19. 10 productos más baratos */
SELECT * FROM Products
ORDER BY UnitPrice ASC
LIMIT 10;

/* 20. 10 productos más caros */
SELECT * FROM Products
ORDER BY UnitPrice DESC
LIMIT 10;

/* 21. Clientes ordenados por compañía */
SELECT * FROM Customers
ORDER BY CompanyName;

/* 22. Clientes que empiezan con B y son de UK */
SELECT * FROM Customers
WHERE CompanyName LIKE 'B%'
AND Country = 'UK'
ORDER BY CompanyName;

/* 23. Productos de categorías 1,3 y 5 */
SELECT * FROM Products
WHERE CategoryID IN (1,3,5)
ORDER BY CategoryID;

/* 24. Productos con precio entre 50 y 200 */
SELECT * FROM Products
WHERE UnitPrice BETWEEN 50 AND 200;

/* 25. Cliente, fecha, precio y producto */
SELECT c.CompanyName, o.OrderDate,
        od.UnitPrice, p.ProductName
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
JOIN Order_Details od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID;

/* 26. Categorías y cantidad de productos */
SELECT c.CategoryName, COUNT(p.ProductID) AS TotalProductos
FROM Categories c
LEFT JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

/* 27. 5 productos más vendidos */
SELECT p.ProductName, SUM(od.Quantity) AS TotalVendido
FROM Products p
JOIN Order_Details od ON p.ProductID = od.ProductID
GROUP BY p.ProductName
ORDER BY TotalVendido DESC
LIMIT 5;

/* 28. Jefes de los empleados */
SELECT DISTINCT
        CONCAT(e2.FirstName,' ',e2.LastName) AS Jefe
FROM Employees e
JOIN Employees e2 ON e.ReportsTo = e2.EmployeeID;

/* 29. Productos que empiezan con M y precio entre 28 y 129 */
SELECT * FROM Products
WHERE ProductName LIKE 'M%'
AND UnitPrice BETWEEN 28 AND 129;

/* 30. Clientes de USA, France y UK */
SELECT * FROM Customers
WHERE Country IN ('USA','France','UK');

/* 31. Productos descontinuados o sin stock */
SELECT * FROM Products
WHERE Discontinued = 1
OR UnitsInStock = 0;

/* 32. Órdenes del empleado Robert King */
SELECT o.*
FROM Orders o
JOIN Employees e ON o.EmployeeID = e.EmployeeID
WHERE e.FirstName = 'Robert'
AND e.LastName = 'King';

/* 33. Órdenes del cliente "Que delicia" */
SELECT o.*
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
WHERE c.CompanyName = 'Que delicia';

/* 34. Productos de la orden 10257 */
SELECT p.ProductID, p.ProductName,
        p.UnitPrice, p.UnitsInStock
FROM Products p
JOIN Order_Details od ON p.ProductID = od.ProductID
WHERE od.OrderID = 10257;

/* 35. Stock por categoría */
SELECT c.CategoryName,
        SUM(p.UnitsInStock) AS StockTotal
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

/* 36. Órdenes hechas por Robert King, Nancy Davolio y Andrew Fuller */
SELECT o.*
FROM Orders o
JOIN Employees e ON o.EmployeeID = e.EmployeeID
WHERE (e.FirstName = 'Robert' AND e.LastName = 'King')
    OR (e.FirstName = 'Nancy' AND e.LastName = 'Davolio')
    OR (e.FirstName = 'Andrew' AND e.LastName = 'Fuller');

/* 37. Productos de órdenes realizadas desde 1997 hasta hoy */
SELECT DISTINCT p.ProductID, p.ProductName,
        p.UnitPrice, p.UnitsInStock
FROM Products p
JOIN Order_Details od ON p.ProductID = od.ProductID
JOIN Orders o ON od.OrderID = o.OrderID
WHERE o.OrderDate >= '1997-01-01';

/* 38. 15 productos más caros */
SELECT * FROM Products
ORDER BY UnitPrice DESC
LIMIT 15;

/* 39. 5 productos más baratos */
SELECT * FROM Products
ORDER BY UnitPrice ASC
LIMIT 5;

/* 40. Categorías con productos, precio y stock */
SELECT c.CategoryName, p.ProductName,
        p.UnitPrice, p.UnitsInStock
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID;

/* 41. Categorías y productos que NO comienzan con P */
SELECT c.CategoryName, p.ProductName,
        p.UnitPrice, p.UnitsInStock
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
WHERE p.ProductName NOT LIKE 'P%';

/* 42. Cliente, proveedor, empleado y productos de la orden 10794 */
SELECT c.CompanyName AS Cliente,
        s.CompanyName AS Proveedor,
        CONCAT(e.FirstName,' ',e.LastName) AS Empleado,
        p.ProductName
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Employees e ON o.EmployeeID = e.EmployeeID
JOIN Order_Details od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE o.OrderID = 10794;

/* 43. Número de órdenes por cliente y año */
SELECT CustomerID,
        YEAR(OrderDate) AS Anio,
        COUNT(OrderID) AS TotalOrdenes
FROM Orders
GROUP BY CustomerID, YEAR(OrderDate)
ORDER BY CustomerID, Anio;

/* 44. Número de órdenes por año y mes */
SELECT YEAR(OrderDate) AS Anio,
        MONTH(OrderDate) AS Mes,
        COUNT(OrderID) AS TotalOrdenes
FROM Orders
GROUP BY YEAR(OrderDate), MONTH(OrderDate)
ORDER BY Anio, Mes;

/* 45. Cliente, orden, fecha, producto, cantidad, proveedor y ciudad */
SELECT c.CompanyName AS Cliente,
        o.OrderID, o.OrderDate,
        p.ProductID, od.Quantity,
        p.ProductName,
        s.CompanyName AS Proveedor,
        s.City
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
JOIN Order_Details od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Suppliers s ON p.SupplierID = s.SupplierID;

/* 46. Cliente, contacto, orden, producto y proveedor (A–G y cantidad 23–187) */
SELECT c.CompanyName AS Cliente,
        c.ContactName,
        o.OrderID, o.OrderDate,
        p.ProductID, od.Quantity,
        p.ProductName,
        s.CompanyName AS Proveedor
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
JOIN Order_Details od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE s.CompanyName BETWEEN 'A' AND 'G'
AND od.Quantity BETWEEN 23 AND 187;

/* 47. Mostrar solo los clientes que han realizado órdenes */
SELECT DISTINCT c.*
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID;

/* 48. Clientes que NO han realizado ninguna orden */
SELECT *
FROM Customers
WHERE CustomerID NOT IN (
    SELECT DISTINCT CustomerID FROM Orders
);