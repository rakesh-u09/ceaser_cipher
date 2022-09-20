import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <>
    <div className='layout'>
    <div className='main'>
    <h1>Ceaser Cipher</h1>
    <div className='container'>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter the Text</label>
    <input type="text" className="form-control" id="exampleInputEmail1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Enter number of Shift </label>
    <input type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>


  <br/>
  <br/>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Generated Text</label>
    <input type="textarea" className="form-control" id="exampleInputPassword1"/>
  </div>
</form>

    </div>
    </div>
    </div>
    </>
  )
}

export default Main