import React from 'react';
export default function AboutUsScreen(){
    return(
        <div className="contactus">
            <h2>Contact Us</h2>
    <p>Reach out to us with your requirements, query or concern!</p>
            <form>      
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Query"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
            
        </div>
    )
}
