const cnx = require('./cnx');
const sql = require('mssql');

async function getEmployee(){
    try{
        let pool  = await sql.connect(cnx);
        let salida = await pool.request().query('select * from empleados')
        console.log(salida.requestset);
    }catch(err){
        console.log(err);
    }
}
getEmployee();
module.exports={
    Getemployee : getEmployee
}