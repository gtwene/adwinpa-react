import React, { useState } from "react";
import axios from 'axios'

function PickitUp() {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [estimatedCost, setEstimatedCost] = useState("")
    const [filename, setFileName] = useState("")
    const [pickUpTime, setPickUpTime] = useState("")
    const [printLayout, setPrintLayout] = useState("")
    const [printLayoutDetails, setPrintLayoutDetails] = useState("")

    const submit = (e) => {
        e.preventDefault()

    var body = {
        // name: name,
        // contact: contact,
        // description: description,
        // email: email,
        // estimatedCost:estimatedCost,
        // filename: '',
        // pickUpTime:pickUpTime,
        // printLayout:printLayout,
        // printLayoutDetails: printLayoutDetails,

        
            name: "Kia",
            contactNo: "0549380507",
            email:"joshuaamarfio1@gmail.com",
            printLayout: "Colored",
            printLayoutDetails: "A4(plain paper)",
            fileName: "myresume.txt",
            noOfPrintOuts: 4,
            pickUpTime: "In 30 minutes",
            description: "its mine",
            estimatedCost: 10
        

    }
    
    axios({
        method: 'POST',
        url: 'https://adwinpa-business-api.herokuapp.com/api/pickup/add-new-pickup',
        data: body,
        headers:{'Content-Type': 'application/json'} 
    })
    .then(function (response) {
        console.log(response.config.data);
        console.log(name)
    })
    .catch(function (error) {
        console.log(error);
    });

    }

    return (
      <div>
        <h2>Pick It Up</h2>
        
        <form>
        <div className="form-row">
                    <div className="form-group">
                        <label>Name :</label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} required/>
                    </div>
                  <div className="form-group">
                    <label>Contact No :</label>
                    <input type="phone" name="contact" id="contactno" onChange={(e) => setContact(e.target.value)} required/>
                  </div>
                     <div class="form-group">
                        <label for="address">Email Address :</label>
                        <input type="text" name="email" id="address" required/>
                    </div>

                    <div class="form-group">
                            <label for="state">Colored Or Black & White ? :</label>
                            <div class="form-select">
                                <select name="printLayout" id="coloredBlackWhite" onchange="disableColorOrBW(this)">
                                    <option value=""></option>
                                    <option value= "colored" >Colored</option>
                                    <option value= "black and white" >Black and White</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                    </div>

                    <div class="form-group" id="colordiv" type="hidden">
                            <label>Colored :</label>
                            <div class="form-select">
                                <select name="printLayoutDetails" id="color" disabled="" onchange="submitOutFunc()">
                                    <option value=""></option>
                                    <option value= '2' >A4 (plain paper)</option>
                                    <option value= '5' >Picture (plain paper)</option>
                                    <option value= '10' >Picture (photopaper)</option>
                                    <option value= '1.5' >Envelope (DL)</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                    </div>

                    {/* <div class="form-group" id="blacknwhitediv">
                            <label>Black & White :</label>
                            <div class="form-select">
                                <select name="blacknwhite" id="blacknwhite" disabled="" onchange="submitOutFunc()" >
                                    <option value=""></option>
                                    <option value= '1' >Black & White (A4)</option>
                                    <option value= '2' >Black & White (A3)</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                     </div> */}

                     <div class="form-group">
                            <label for="address">Upload file :</label>
                            <input type="file" name="filename" id="file"  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required/>
                    </div>

                    <div class="form-group">
                            <label for="state">How many printouts? :</label>
                            <div class="form-select">
                                <select name="copies" id="copies" onchange="submitOutFunc(); disableEnabled(this); ">
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                    </div>

                    <div class="form-group">
                            <label for="state">When do you want to pick it up? :</label>
                            <div class="form-select" required>
                                <select name="pickuptime" id="pickup">
                                    <option value=""></option>
                                    <option value="In 15 minutes">In 30 minutes</option>
                                    <option value="In 30 minutes">In 1 hour</option>
                                    <option value="In 1 hour">In 2 hours</option>
                                    <option value="In 5 hours">In 5 hours</option>
                                    <option value="Next day">Next day</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                    </div>

                    <div class="form-group" hidden>
                            <label for="state">Where are you located? :</label>
                            <div class="form-select" required>
                                <select name="delivery" id="deliver" onchange="EveryResults(this.value)">
                                    <option value=""></option>
                                    <option value="3">American Farm</option>
                                    <option value="6">Nsuonano</option>
                                    <option value="5">Assemblies</option>
                                    <option value="5">Top Town</option>
                                    <option value="3">50-50</option>
                                    <option value="8">Peace Town</option>
                                    <option value="6">Free Town</option>
                                    <option value="6">Atsia</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                    </div>

                    <div class="form-group" id="laminationDiv" hidden="">
                            <label for="state">Do you want Lamination?  :</label>
                            <div class="form-select">
                                <select name="lamination" id="lamination" onchange="submitOutFunc()">
                                    <option value=""></option>
                                    <option value="5">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>

                        <div class="form-group" id="envelopeDiv" hidden="">
                            <label for="state">Do you want Envelope?  :</label>
                            <div class="form-select">
                                <select name="envelope" id="envelope" onchange="submitOutFunc()">
                                    <option value=""></option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>

                        <div class="form-group" id="bindingDiv" hidden="">
                            <label for="state">Do you want Binding?  :</label>
                            <div class="form-select">
                                <select name="binding" id="binding" onchange="submitOutFunc()">
                                    <option value=""></option>
                                    <option value="5">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="birth_date">Describe your work if not mentioned above :</label>
                            <input type="text" name="description" id="above" />
                        </div>

                        <div class="form-group">
                            <label for="state">Payment Mode :</label>
                            <div class="form-select">
                                <select name="payment" id="payment" onchange="enableMomo(this)">
                                    <option value=""></option>
                                    <option value="1">Cash</option>
                                    <option value="2">MoMo</option>
                                    
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>

                        <div class="form-group" id="momo" >
                            <label for="course" >For MoMo : Pay it to (054 544 6826) Fredrick Ankamah Twene</label>
                        </div>
                        <div class="form-group" id="estimatedCost" hidden="">
                            <label for="number">Estimated Cost :</label>
                            <input type="text" name="estimatedcost" id="tot_cost" />
                        </div>

            </div>
            <button className='w-full btn' style={{ margin: "auto" }} type="submit" onClick={submit}>Send</button>
        </form>
        
      </div>
    );
  }

  export default PickitUp;