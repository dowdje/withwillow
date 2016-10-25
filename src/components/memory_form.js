import React from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import DatePicker from 'react-bootstrap-date-picker'

export default function(){
 return(
   <div className='col-md-4' style={{paddingTop:'64px'}}>
     <form>
       <FormGroup>
         <FormControl
           type='text'
           placeholder='First Name'
         />
         <FormControl
           type='text'
           placeholder='Last Name'
         />
         <FormControl
           componentClass="textarea"
           placeholder="Say some sad things about your dead friend :'("
         />

      Birthday: <DatePicker />
    Deathday: <DatePicker />
       </FormGroup>
       <Button type='submit' bsStyle='danger'>Submit</Button>
     </form>
   </div>
 )
}
