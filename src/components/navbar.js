import React from 'react';
import {Nav, Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import Modal from 'react-modal';

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {modalIsOpen: false}
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.modalStyle = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    }
  }

  openModal(){
    this.setState({modalIsOpen: true})
  }

  afterOpenModal(){
    // references are now sync'd and can be accessed.
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render(){
  return(
    <nav>
    <div className="w3-top">
      <ul className="w3-navbar w3-black w3-card-2 w3-left-align">
      <li className="w3-hide-medium w3-hide-large w3-opennav w3-right">
        <a className="w3-padding-large" href="javascript:void(0)" onClick={()=>document.getElementById('mobileSiteNav').show()}title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
      </li>
      <li><a href="#" className="w3-hover-none w3-hover-text-grey w3-padding-large">Home</a></li>
      <li className="w3-hide-small"><a href="#band" className="w3-padding-large">About</a></li>
      <li className="w3-hide-small" onClick={this.openModal}><a href="#signup" className="w3-padding-large">Join Us</a></li>
      <li className="w3-hide-small" ><Link className='w3-padding-large' to='/form'>Write a Tribute</Link></li>
      <li className="w3-hide-small"><a href="#contact" className=" w3-padding-large"></a></li>
      <li className="w3-hide-small w3-dropdown-hover">
        <a href="javascript:void(0)" className="w3-hover-none w3-padding-large" title="More">MORE <i className="fa fa-caret-down"></i></a>
        <div className="w3-dropdown-content w3-white w3-card-4">
          <a href="#">Merchandise</a>
          <a href="#">Extras</a>
          <a href="#">Media</a>
        </div>
      </li>
      <li className="w3-hide-small w3-right"><a href="javascript:void(0)" className="w3-padding-large w3-hover-red"><i className="fa fa-search"></i></a></li>
      </ul>
      </div>
      <div id="navDemo" className="w3-hide w3-hide-large w3-hide-medium w3-top" style={{marginTop:"46px"}}>
        <ul className="w3-navbar w3-left-align w3-black" id='mobileSiteNav'>
          <li><a className="w3-padding-large" href="#band">BAND</a></li>
          <li><a className="w3-padding-large" href="#tour">TOUR</a></li>
          <li><a className="w3-padding-large" href="#contact">CONTACT</a></li>
          <li><a className="w3-padding-large" href="#">MERCH</a></li>
        </ul>
      </div>
          <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={this.modalStyle}
      contentLabel="Example Modal"
      >

      <Button bsSize='small' style={{width: '1px', float: 'right'}} className='w3-top w3-right' onClick={this.closeModal}>X </Button>
      <h2 ref="subtitle">Hello</h2>
      <div>I am a modal</div>
      <form>
        <input placeholder='Full Name'/>
        <input placeholder='E-mail'/>
        <input placeholder='Password'/>
        <input placeholder='Confirm Password'/>
        <button type='submit'>Sign Up</button>
      </form>
    </Modal>

    </nav>
  )}

}
