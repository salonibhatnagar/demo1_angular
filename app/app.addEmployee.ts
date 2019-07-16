import {Component, ɵConsole} from '@angular/core';
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    empId:any;
    empName:string;
    empSalary:any;
    empall:any[]=[
        {empId:100,empName:"saloni",empSalary:3000.00},
        {empId:101,empName:"sal",empSalary:2000.00},
        {empId:102,empName:"s",empSalary:1500.00}
    ];

   
    addEmployee():any{
    this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
    this.empId="";
    this.empName="";
    this.empSalary="";
    }
    deleteEmployee(data:number):any{
        this.empall.splice(data,1);

    }
    
    data1:number=null;
    empid:any;
    empname:string;
    empsalary:any;
    detailsEmployee(data:number)
    {
    this.empid=this.empall[data].empId;
    this.empname=this.empall[data].empName;
    this.empsalary=this.empall[data].empSalary;
    this.data1=data;
    }
    updateEmployee():any
    {
this.empall.splice(this.data1,1,{empId:this.empid,empName:this.empname,empSalary:this.empsalary});
this.empid="";
this.empname="";
this.empsalary="";
    }
}