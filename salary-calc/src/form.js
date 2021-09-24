import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);
        this.CalculateSalary = this.CalculateSalary.bind(this);
        this.calculateNI = this.calculateNI.bind(this);
        // this.calculatePension = this.calculatePension.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.showResultsTable = this.showResultsTable.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            salary : 0,
            paid : 'yearly',
            taxableIncome: 0,
            pensionRate: 0.05,
            nationalInsurance: 0,
            showResults : false,
            numberOfHoursWorkedInAWeek : 37.5
          }
    }
    handleSubmit(event){
        if(this.state.salary > 0){
            this.CalculateSalary();
            this.calculateNI() 
            this.showResultsTable();
        }
        else{
            alert("Enter Salary")
        }
        event.preventDefault();
    }
    // onClick(){
    //     this.CalculateSalary();
    //     this.calculateNI() 
    //     this.showResultsTable();
    // }
    showResultsTable(){this.setState({showResults : true})
        if(this.state.salary > 0){
            
        }
    }
    calculateNI(){
        this.CalculateSalary()
        if(this.state.salary > 9568){
            this.setState({nationalInsurance : (this.state.salary - 9568) * 0.12 });
        }
        else {
            this.setState({nationalInsurance : (this.state.salary) * 0.12 });
        }

    }
    CalculateSalary(){
        if(this.state.paid === "yearly"){
            this.setState({salary : this.state.salary});
        } 
        // else if(this.state.paid === "monthly"){
        //     this.setState({salary : this.state.salary * 12});
        // }
        // else if(this.state.paid === "weekly"){
        //     this.setState({salary : this.state.salary * 52});
        // }
        // else if(this.state.paid === "daily"){
        //     this.setState({salary : this.state.salary * 355});
        // }
        // else if(this.state.paid === "hourly"){
        //     this.setState({salary : (this.state.salary * (this.state.numberOfHoursWorkedInAWeek * 52))});
        // }

        if(this.state.salary > 12570){
            this.setState({taxableIncome : this.state.salary - 12570 });
        } else {
            this.setState({taxableIncome : 0 });
        }
    }
    handleSalaryChange(event) {
        this.setState({showResults : false});
        this.setState({salary : event.target.value});
        // if(this.state.paid === "yearly"){
        //     this.setState({salary : event.target.value});
        // } 
        // else if(this.state.paid === "monthly"){
        //     this.setState({salary : event.target.value * 12});
        // }
        // else if(this.state.paid === "weekly"){
        //     this.setState({salary : event.target.value * 52});
        // }
        // else if(this.state.paid === "daily"){
        //     this.setState({salary : event.target.value * 355});
        // }
        // else if(this.state.paid === "hourly"){
        //     this.setState({salary : (event.target.value * (this.state.numberOfHoursWorkedInAWeek * 52))});
        // }
    }
    handleSelectChange(event){
        this.setState({paid: event.target.value});
       this.CalculateSalary()
    }  
    render() { 
        return ( 
            <div className="App flex items-center justify-center min-h-screen">
               <div>
                    <div className="max-w-xl w-full mx-auto p-4 md:p-6 border border-2">
                        <div className="flex justify-center">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="flex mr-6"> 
                                        <span className="text-sm text-white border border-2 border-red-700 rounded-l px-4 py-2 bg-red-700">£</span>
                                        <input onChange={this.handleSalaryChange} name="field_name" className="outline-none text-red-700 block px-4 py-2 border border-2 border-red-700 bg-black" type="number" placeholder="Enter your annual salary..." />
                                     </div>   
                                     <div className="text-center pt-6">
                                        <button className="px-4 py-2 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition text-red-700 bg-black border-red-800 hover:underline active:bg-red-700 focus:ring-red-700 mx-auto" type="submit">Calculate
                                        </button>
                                    </div>
                                </form>
                                <div className="relative inline-flex">
                                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
                                <select value={this.state.paid} onChange={this.handleSelectChange} className="border border-2 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                    <option value="yearly">Yearly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="daily">Daily</option>
                                </select>
                                </div>
                                
                            </div>
                            <div className="text-center pt-6">
                                <button onClick={this.CalculateSalary} className="px-4 py-2 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition text-white bg-red-500 border-red-800 hover:bg-red-600 active:bg-red-700 focus:ring-red-300 mx-auto" type="submit">Calculate
                                </button>
                            </div>
                        
                    </div>
                    <div>
                            <table className="w-full rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
                    {this.state.showResults === true ? (
                            <div>
                            <table className="text-left w-full rounded-t-lg m-5 w-5/6 mx-auto text-red-700 text-white font-bold">
                                <tbody>
                                    <tr className="text-left border-b border-gray-300">
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3">Year</th>
                                        <th className="px-4 py-3">Month</th>
                                        <th className="px-4 py-3">Week</th>
                                        <th className="px-4 py-3">Day</th>
                                        <th className="px-4 py-3">Hour</th>
                                    </tr>
                                    <tr className="bg-gray-700 border-b border-gray-600">
                                        <td className="px-4 py-3">Gross Salary</td>
                                        <td className="px-4 py-3">{this.state.salary}</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.salary/12).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.salary/52).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.salary/355).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.salary/1950).toFixed(1)}</td>
                                    </tr>
                                    <tr className="bg-gray-700 border-b border-gray-600">
                                    <tr className="text-red-700">
                                        <td className="px-4 py-3">Pension</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.salary * this.state.pensionRate).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.salary * this.state.pensionRate)/12).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.salary * this.state.pensionRate)/52).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.salary * this.state.pensionRate)/355).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.salary * this.state.pensionRate)/1950).toFixed(1)}</td>
                                    </tr>    
                                    <tr className="text-red-700">
                                        <td className="px-4 py-3">National Insurance</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.nationalInsurance).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.nationalInsurance)/12).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.nationalInsurance)/52).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.nationalInsurance)/355).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.nationalInsurance)/1950).toFixed(1)}</td>
                                    </tr>    
                                    <tr className="text-red-700">
                                        <td className="px-4 py-3">Taxable Income</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.taxableIncome).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome)/12).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome)/52).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome)/355).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome)/1950).toFixed(1)}</td>
                                    </tr>        
                                    <tr className="text-red-700">
                                        <td className="px-4 py-3">Income Tax</td>
                                        <td className="px-4 py-3">{parseFloat(this.state.taxableIncome * 0.2).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome * 0.2)/12).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome * 0.2)/52).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome * 0.2)/355).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.taxableIncome * 0.2)/1950).toFixed(1)}</td>
                                    </tr>        
                                    <tr className="text-red-700">
                                        <td className="px-4 py-3">Net Salary</td>
                                        <td className="px-4 py-3">{parseFloat((this.state.salary) - (this.state.nationalInsurance) - (this.state.taxableIncome * 0.2) - (this.state.salary * this.state.pensionRate) ).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat(((this.state.salary) - (this.state.nationalInsurance) - (this.state.salary * this.state.pensionRate) - (this.state.taxableIncome * 0.2))/12).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat(((this.state.salary) - (this.state.nationalInsurance) - (this.state.salary * this.state.pensionRate) - (this.state.taxableIncome * 0.2))/52).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat(((this.state.salary) - (this.state.nationalInsurance) - (this.state.salary * this.state.pensionRate) - (this.state.taxableIncome * 0.2))/355).toFixed(1)}</td>
                                        <td className="px-4 py-3">{parseFloat(((this.state.salary) - (this.state.nationalInsurance) - (this.state.salary * this.state.pensionRate) - (this.state.taxableIncome * 0.2))/1950).toFixed(1)}</td>
                                    </tr>    
                                </tbody>
                            </table>

                            </div>

                    ) : (
                        <span></span>
                    )}
                   </div>
            </div>
         );
    }
}
 
export default Form;