from ast import Import
from cmath import cos
import psycopg2
import psycopg2.extras

import sqlalchemy
from sqlalchemy import *

from flask import Flask, jsonify, request, session, send_from_directory

from flask_cors import CORS

from DB_Connections.DBManager import DBManager
from DB_Connections.dbIca import ICA
from DB_Connections.dbtypes import Types


#Base = declarative_base()
from DB_Connections.baseInstance import Base
db = DBManager.getInstance() 


class AllExpenses(Base):
    __tablename__ = "expenses"
    id_expense = Column(Integer, primary_key=True)
    employee_mail = Column(String(150))
    date_limit = Column(Date)
    cost = Column(Float)
    comment = Column(String(150))
    id_ica = Column(Integer, ForeignKey("ica.id_ica"))
    id_type = Column(Integer, ForeignKey("type.id_type"))
    ica_manager = Column(String(150))
    administrator = Column(String(150))

    

    def __init__(self,mail,date_limit, cost, comment, idICA, idType, ica_manager, administrator):
        self.employee_mail = mail
        self.date_limit = date_limit
        self.cost = cost
        self.comment = comment
        self.id_ica = idICA
        self.id_type = idType
        self.ica_manager = ica_manager
        self.administrator = administrator
        


    def serialize(self):
        return {
            'expense_id': self.id_expense, 
            'mail': self.employee_mail,
            'date_limit':  self.date_limit,
            'cost':  self.cost,
            'comment': self.comment,
            'ica_id': self.id_ica,
            'type_id': self.id_type,
            'ica_manager': self.ica_manager,
            'administrator': self.administrator,
            
        }

def getAllExpenses():
    global db
    if db==None:
        db=DBManager.getInstance
    expensesList = []

    stmt = select(AllExpenses)
    for allExpenses in db.session.scalars(stmt):
        expensesList.append(allExpenses)
    resp = jsonify([e.serialize() for e in expensesList]) #Con esto puedes mandar lista de objetos en json
    return resp

def newAllPostExpense():
    print("All Expenses Post")
    _json = request.json
    _mail = _json['mail']
    _date_limit = _json['date']
    _cost = _json['cost']
    _comment = _json['comment']
    _ica = _json['ica']
    _type = _json['type']
    _ica_manager = "test@ibm.com"
    _administrator = "test@ibm.com"
    
    


    if request.method == 'POST':
        if not _mail or not _date_limit or not _cost or not _comment or not _ica or not _type or not _ica_manager or not _administrator:
            return "Values fields are incomplete"
        else:
            expense = AllExpenses(  _mail ,_date_limit, _cost , _comment ,_ica , _type ,_ica_manager, _administrator)
            
            db.session.add(expense)
            db.session.commit()
            
            return "New All Expense Uploaded Succesfully"

def deleteAllExpense(id):
    global db
    if request.method == 'DELETE':
        # autoIncrement = "alter sequence id_type_of_expense_type_seq restart "+ str(id)
        # db.session.execute(autoIncrement)
        queryCheck = select(AllExpenses).where(AllExpenses.id_expense == id)
        expType=db.session.scalar(queryCheck)
        if(expType == None): #check if record does exist
            return "Expense record not found"
        else:
            stmt = delete(AllExpenses).where(AllExpenses.id_expense == id)
            print(stmt)
            db.session.execute(stmt)
            db.session.commit()

            return "Expense delete done"
