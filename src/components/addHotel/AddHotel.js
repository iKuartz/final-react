import React from 'react'
import { useState } from 'react';

function AddHotel() {
  const [values, setValues] = useState({
    "room": true,
    'pool': false,
    'bar': false,
    'air_conditioning': false,
    'tv': false,
    'gym': false,
    'country': '',
    'state': '',
    'city': '',
    'neighbourhood': '',
    'street': '',
    'number': 0,
    'name': '',
    'description': ''
  })
  const form = new FormData();

  return (
    <section>
      <form>
        <div className='checkbox'>
          <label htmlFor="pool" >Pool</label>
          <input type="checkbox" name="pool" value={values['pool']} onChange={(e) => {
            setValues({ ...values, 'pool': e.target.checked })
          }} />
        </div>


        <div className='checkbox'>
          <label htmlFor="bar" >Bar</label>
          <input type="checkbox" name="bar" value={values['bar']} onChange={(e) => {
            setValues({ ...values, 'bar': e.target.checked })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="air_conditioning" >Air conditioning</label>
          <input type="checkbox" name="air_conditioning" value={values['air_conditioning']} onChange={(e) => {
            setValues({ ...values, 'air_conditioning': e.target.checked })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="tv" >Tv</label>
          <input type="checkbox" name="tv" value={values['tv']} onChange={(e) => {
            setValues({ ...values, 'tv': e.target.checked })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="gym" >Gym</label>
          <input type="checkbox" name="gym" value={values['gym']} onChange={(e) => {
            setValues({ ...values, 'gym': e.target.checked })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="Country" >Country</label>
          <input type="text" name="country" value={values['country']} onChange={(e) => {
            setValues({ ...values, 'country': e.target.value })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="state" >State</label>
          <input type="text" name="state" value={values['state']} onChange={(e) => {
            setValues({ ...values, 'state': e.target.value })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="city" >City</label>
          <input type="text" name="city" value={values['city']} onChange={(e) => {
            setValues({ ...values, 'city': e.target.value })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="neighbourhood" >Neighbourhood</label>
          <input type="text" name="neighbourhood" value={values['neighbourhood']} onChange={(e) => {
            setValues({ ...values, 'neighbourhood': e.target.value })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="description" >Description</label>
          <input type="text" name="description" value={values['podescriptionol']} onChange={(e) => {
            setValues({ ...values, 'description': e.target.value })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="street" >Street</label>
          <input type="text" name="street" value={values['street']} onChange={(e) => {
            setValues({ ...values, 'street': e.target.value })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="number" >Pool</label>
          <input type="number" name="number" value={values['number']} onChange={(e) => {
            setValues({ ...values, 'number': e.target.value })
          }} />
        </div>

        <div className='checkbox'>
          <label htmlFor="name" >Name</label>
          <input type="text" name="name" value={values['name']} onChange={(e) => {
            setValues({ ...values, 'name': e.target.value })
          }} />
        </div>


      </form>

      {/* <button onClick={() => {
        form.append('air', values['air'])
        form.append('tv', values['tv'])
      }}>submit</button> */}
      <button onClick={() => console.log(values)}>log</button>

    </section>
  )
}

export default AddHotel