CREATE TABLE ICA
(
	Id_ICA SERIAL PRIMARY KEY,
	ICA_Code Varchar (120),
	ICA_Core Varchar (120),
	Year Varchar (120),
	Id_Planning Varchar (50),
	ICA_Owner Varchar (150),
	Budget Float,
	Country Varchar(120),
	Status Varchar (200),
	Depto Varchar (50),
	Frequency_Bill Varchar(50),
	CC Varchar (50),
	City_Name_Req Varchar (100),
	Division Varchar (50),
	Major Varchar (50),
	Minor Varchar (50),
	Leru Varchar (50),
	Description Varchar (200),
	Type_Name Varchar (100),
	NEC Int,
	Total_Plus_Taxes Float,
	Start_Date Date,
	End_Date Date,
	Cty_Name_Perf Varchar (50),
	R_Cty_Perf Varchar (100),
	Total_Billing Float
);
