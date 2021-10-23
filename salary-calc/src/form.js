import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.CalculateSalary = this.CalculateSalary.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.showResultsTable = this.showResultsTable.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            salary: 0,
            gross: {},
            pension: {},
            nationalinsurance: {},
            taxableincome: {},
            incometax: {},
            netpay: {},
            showResults: false

        }
    }
    handleSubmit(event) {
        if (!this.state.salary > 0) {
            alert("Enter Salary")
        }
        if (this.state.salary > 0) {
            this.CalculateSalary()
        }
        event.preventDefault();
    }
    showResultsTable() {
        this.setState({ showResults: true })
    }
    CalculateSalary() {
        fetch('https://gunishetty-salary-calc-api.herokuapp.com/?annualPay=' + this.state.salary).then((res) => {
            res.json().then((data) => {
                this.showResultsTable()
                this.setState({ gross: data.gross })
                this.setState({ pension: data.pension })
                this.setState({ nationalinsurance: data.nationalinsurance })
                this.setState({ taxableincome: data.taxableincome })
                this.setState({ incometax: data.incometax })
                this.setState({ netpay: data.netpay })
            })
        })
    }
    handleSalaryChange(event) {
        this.setState({ showResults: false });
        this.setState({ salary: event.target.value });
    }

    handleSalaryChange(event) {
        this.setState({ showResults: false });
        this.setState({ salary: event.target.value });
    }
    componentDidMount() {
        // this.CalculateSalary(this.state.salary)
    }
    render() {
        return (
            <div className="App flex items-center justify-center min-h-screen bg-gray-900">
                <div className="">
                    <div className="max-w-xl w-full mx-auto p-4 md:p-6 ">
                        <div className="flex justify-center">
                            <form onSubmit={this.handleSubmit}>
                                <div className="flex mr-6">
                                    <span className="text-sm text-white rounded-l px-4 py-2 bg-gray-800">£</span>
                                    <input onChange={this.handleSalaryChange} name="field_name" className="outline-none text-white block px-4 py-2 bg-black" type="number" placeholder="Enter your annual salary..." />
                                </div>
                                <div className="text-center pt-6">
                                    <button className="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition text-white bg-black hover:underline active:bg-grey-700 focus:ring-grey-700 mx-auto" type="submit">Calculate
                                    </button>
                                </div>
                            </form>
                            <div className="relative inline-flex">
                                {/* <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg> */}
                                {/* <select value={this.state.paid} onChange={this.handleSelectChange} className="border border-2 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                    <option value="yearly">Yearly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="daily">Daily</option>
                                    <option value="hourly">Hourly</option>
                                </select> */}
                            </div>

                        </div>

                    </div>
                    {this.state.showResults === true ? (
                        <div className="overflow-auto lg:overflow-visible ">
                            <table class="table text-gray-400 border-separate space-y-6 text-sm">
                                <tbody>
                                    <tr className="bg-gray-800 my-2">
                                        <th className="p-3 text-left"></th>
                                        <th className="p-3 text-left">Year</th>
                                        <th className="p-3 text-left">Month</th>
                                        <th className="p-3 text-left">Week</th>
                                        <th className="p-3 text-left">Day</th>
                                        <th className="p-3 text-left">Hour</th>
                                    </tr>
                                    <tr className="bg-gray-800 my-2">
                                        <td className="p-3 text-left">Gross Salary</td>
                                        <td className="p-3 text-left">{this.state.gross.yearly}</td>
                                        <td className="p-3 text-left">{this.state.gross.monthly}</td>
                                        <td className="p-3 text-left">{this.state.gross.weekly}</td>
                                        <td className="p-3 text-left">{this.state.gross.daily}</td>
                                        <td className="p-3 text-left">{this.state.gross.hourly}</td>
                                    </tr>
                                    <tr className="bg-gray-800 my-2">
                                        <td className="p-3 text-left">Pension</td>
                                        <td className="p-3 text-left">{this.state.pension.yearly}</td>
                                        <td className="p-3 text-left">{this.state.pension.monthly}</td>
                                        <td className="p-3 text-left">{this.state.pension.weekly}</td>
                                        <td className="p-3 text-left">{this.state.pension.daily}</td>
                                        <td className="p-3 text-left">{this.state.pension.hourly}</td>
                                    </tr>
                                    <tr className="bg-gray-800 my-2">
                                        <td className="p-3 text-left">National Insurance</td>
                                        <td className="p-3 text-left">{this.state.nationalinsurance.yearly}</td>
                                        <td className="p-3 text-left">{this.state.nationalinsurance.monthly}</td>
                                        <td className="p-3 text-left">{this.state.nationalinsurance.weekly}</td>
                                        <td className="p-3 text-left">{this.state.nationalinsurance.daily}</td>
                                        <td className="p-3 text-left">{this.state.nationalinsurance.hourly}</td>
                                    </tr>
                                    <tr className="bg-gray-800 my-2">
                                        <td className="p-3 text-left">Taxable Income</td>
                                        <td className="p-3 text-left">{this.state.taxableincome.yearly}</td>
                                        <td className="p-3 text-left">{this.state.taxableincome.monthly}</td>
                                        <td className="p-3 text-left">{this.state.taxableincome.weekly}</td>
                                        <td className="p-3 text-left">{this.state.taxableincome.daily}</td>
                                        <td className="p-3 text-left">{this.state.taxableincome.hourly}</td>
                                    </tr>
                                    <tr className="bg-gray-800 my-2">
                                        <td className="p-3 text-left">Income Tax</td>
                                        <td className="p-3 text-left">{this.state.incometax.yearly}</td>
                                        <td className="p-3 text-left">{this.state.incometax.monthly}</td>
                                        <td className="p-3 text-left">{this.state.incometax.weekly}</td>
                                        <td className="p-3 text-left">{this.state.incometax.daily}</td>
                                        <td className="p-3 text-left">{this.state.incometax.hourly}</td>
                                    </tr>
                                    <tr className="bg-gray-800 my-2">
                                        <td className="p-3 text-left">Net Salary</td>
                                        <td className="p-3 text-left">{this.state.netpay.yearly}</td>
                                        <td className="p-3 text-left">{this.state.netpay.monthly}</td>
                                        <td className="p-3 text-left">{this.state.netpay.weekly}</td>
                                        <td className="p-3 text-left">{this.state.netpay.daily}</td>
                                        <td className="p-3 text-left">{this.state.netpay.hourly}</td>
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