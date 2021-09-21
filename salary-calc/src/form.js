import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div className="App flex items-center justify-center min-h-screen">
               <div>
                    <div className="max-w-xl w-full mx-auto p-4 md:p-6 border border-2">
                        <div className="flex justify-center">
                                <div className="flex mr-6">
                                    <span className="text-sm border border-2 rounded-l px-4 py-2 bg-gray-300">£</span>
                                    <input value={this.state.salary} onChange={this.handleSalaryChange} name="field_name" className="border border-2 rounded-r px-4 py-2 hover:border-gray-400" type="text" placeholder="Enter your salary..." />
                                </div>
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
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                    </tr>
                                    <tr className="bg-gray-700 border-b border-gray-600">
                                        <td className="px-4 py-3">Income Tax</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                    </tr>        
                                    <tr className="bg-gray-700 border-b border-gray-600">
                                        <td className="px-4 py-3">Net Salary</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                        <td className="px-4 py-3">0</td>
                                    </tr>    
                                </tbody>
                            </table>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Form;