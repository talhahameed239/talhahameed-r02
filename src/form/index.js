import './style.css'
function Form() {
    return (
        <div>
            <div class="clear"></div>
            <div class="container3">
                <div class="form-container">
                    <h2>What can us do for you</h2>
                    <p>We are ready to work on a project complexity<br />whether it's commercial & residential</p>
                </div>
                <div class="inputs">
                    <input type="text" placeholder='Your Name*' alt="" />
                    <input type="email" placeholder='Email*' alt="" />
                    <input type="text" placeholder='Reason for contacting*' alt="" />
                    <input type="number" placeholder='Phone' alt="" />
                    <input class="textArea" type="text" placeholder='Message' alt=" " />
                    <p><b class="dot">*</b> indicates a require field</p>
                    <input type="submit" value="Submit" class="btn" />
                </div>
            </div>
        </div>
    )
}
export default Form;