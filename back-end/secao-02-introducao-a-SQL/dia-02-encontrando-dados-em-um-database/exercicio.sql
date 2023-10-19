SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 2 + 1;
SELECT 10 + 15;
SELECT * FROM Scientists.Scientists;
SELECT * FROM Scientists.Projects;
SELECT Name AS nome_do_projeto, Hours AS tempo_de_trabalho FROM Scientists.Projects;
SELECT * FROM Scientists.Scientists ORDER BY Name;
SELECT * FROM Scientists.Scientists ORDER BY Name DESC;
SELECT CONCAT("O projeto ", Name, " precisou de ", Hours, " Horas para ser concluído.") FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT * FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;
SELECT CONCAT("Existem ", COUNT(*), " cientistas na tabela Scientist.") AS quantidade_de_cientistas FROM Scientists.Scientists;



